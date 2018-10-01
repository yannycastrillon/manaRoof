class CompaniesController < ApplicationController
  before_action :set_company, except: [:index, :create]

  def index
    render json: Company.all
  end

  def show
    render json: @company, status: :ok
  end

  def create
    new_company = Company.new(company_params)
    if new_company.save
      render json: new_company, status: :created
    else
      render json: new_company.errors, status: :unprocessable_entity
    end
  end

  def update
    if @company.update_attributes(company_params)
      render json: @company, status: :ok
    else
      render @company.errors, status: :unprocessable_entity
    end
  end

  def destroy
    if @company.destroy
      render json: @company, status: :ok
    else
      render json: @company.errors, status: :unprocessable_entity
    end
  end

  private

  def set_company
    @company = Company.find(params[:id])
  end

  def company_params
    params.require(:company).permit(:name, :description, :street, :phone_number,
                                    :county, :city, :state, :country,
                                    :zipcode, :contact_id )
  end
end
