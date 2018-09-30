class Team < ApplicationRecord
  has_many :employee_teams, inverse_of: :team
  has_many :employees, through: :employee_teams
  has_one :project_team_scheduler
  has_one :project, through: :project_team_scheduler
  accepts_nested_attributes_for :employee_teams
end
