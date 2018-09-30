module TeamHelper
  extend ActiveSupport::Concern

  def add_team_employee(employee, team)
    render json: team, status: :ok if team.employees << employee
  end

  def remove_team_employee(employee, team)
    render json: team, status: :ok if team.employees.delete(employee)
  end
end
