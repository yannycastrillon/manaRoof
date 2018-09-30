class ProjectsController < ApplicationController
  before_action :set_project, except: [:index, :create]

  def index
    render json: Project.all
  end

  def show
    render json: @project, status: :ok
  end

  def create
    new_project = Project.new(project_params)
    if new_project.save
      render json: new_project, status: :created
    else
      render json: new_project.errors, status: :unprocessable_entity
    end
  end

  def update
    if @project.update_attributes(project_params)
      render json: @project, status: :ok
    else
      render @project.errors, status: :unprocessable_entity
    end
  end

  def destroy
    if @project.destroy
      render json: @project, status: :ok
    else
      render json: @project.errors, status: :unprocessable_entity
    end
  end

  private

  def set_project
    @project = Project.find(params[:id])
  end

  def project_params
    params.require(:project).permit(:name, :price, :status,
                                    :start_date, :end_date,
                                    :company_id, :phase_id)
  end
end
