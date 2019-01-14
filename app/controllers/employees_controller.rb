class EmployeesController < ApplicationController
  before_action :set_employee, except: [:index, :create]

  def index
    render json: Employee.all, status: :ok
  end

  def show
    render json: @employee
  end

  def create
    Employee.transaction do
      new_employee = Employee.new(employee_params)
      if new_employee.save!
        render json: new_employee, status: :created
      else
        render json: new_employee.errors, status: :unprocessable_entity
      end
    end
  end

  def update
    if @employee
      if @employee.update_attributes(employee_params)
        render json: @employee, status: :ok
      else
        render @employee.errors, status: :unprocessable_entity
      end
    else
      render json: { errors: [I18n.t('errors.employee.none_found')] },
                   status: :bad_request
    end
  end

  def destroy
    if @employee
      if @employee.update_attributes(active: false)
        render json: @employee, status: :ok
      else
        render json: @employee.errors, status: :unprocessable_entity
      end
    else
      render json: { errors: [I18n.t('errors.employee.none_found')] },
                   status: :bad_request
    end
  end

  private

  def set_employee
    @employee = Employee.find(params[:id])
  end

  def employee_params
    params.require(:employee).permit(:first_name,
                                     :last_name,
                                     :date_of_birth,
                                     :gender,
                                     :driver_license,
                                     :salary_per_hour,
                                     :ssn,
                                     :cell_phone,
                                     :email,
                                     :street,
                                     :second_address,
                                     :city,
                                     :state,
                                     :zipcode,
                                     :nationality,
                                     :start_date,
                                     :phone_number,
                                     :status)
  end
end
