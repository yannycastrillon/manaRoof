class ProjectTeamScheduler < ApplicationRecord
  belongs_to :team
  belongs_to :project
end
