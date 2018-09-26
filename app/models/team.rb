class Team < ApplicationRecord
  has_one :project_team_scheduler
  has_one :project, through: :project_team_scheduler
  has_many :employees
end
