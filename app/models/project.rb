class Project < ApplicationRecord
  has_one :project_team_scheduler
  has_one :team, through: :project_team_scheduler

  belongs_to :company
  belongs_to :phase
end
