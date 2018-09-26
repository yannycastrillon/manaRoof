class TeamsController < ApplicationController
  before_action :set_team, except: [:index, :create]
  before_action :set_employee, only: [:add_employee]

  def index
    render json: Team.all, status: :ok
  end

  def show
    render json: @team
  end

  def create
    new_team = Team.new(team_params)
    if new_team.save
      render json: new_team, status: :created
    else
      render json: new_team.errors, status: :unprocessable_entity
    end
  end

  def update
    if @team
      if @team.update_attributes(team_params)
        render json: @team, status: :ok
      else
        render @team.errors, status: :unprocessable_entity
      end
    else
      render json: { errors: [I18n.t('errors.team.none_found')] }, status: :bad_request
    end
  end

  def destroy
    if @team
      if @team.update_attributes(active: false)
        render json: @team, status: :ok
      else
        render json: @team.errors, status: :unprocessable_entity
      end
    else
      render json: { errors: [I18n.t('errors.team.none_found')] }, status: :bad_request
    end
  end

  def add_employee
    render json: { errors: 'Team not found' }, status: :bad_request unless @team
    render json: { errors: 'Employee not found'}, status: :bad_request unless @employee

    if @team.update_attributes(employee_id: @employee.id)
      render json: @team, status: :ok
    else
      render json: { errors: [I18n.t('errors.team.none_found')] }, status: :bad_request
    end
  end

  private

  def set_team
    @team = Team.find(params[:id])
  end

  def set_employee
    @employee = Employee.find(params[:employee_id])
  end

  def team_params
    params.require(:team).permit(:name, :employee_id)
  end
end
