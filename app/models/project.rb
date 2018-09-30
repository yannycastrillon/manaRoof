class Project < ApplicationRecord
  has_one :project_team_scheduler
  has_one :team, through: :project_team_scheduler

  belongs_to :company
  belongs_to :phase


  CONSTRUCTION_STAGE = {
    stage1: "Load Material",
    stage2: "Install or takeoff Roof",
    stage3: "Roof Detail",
    stage4: "Apply Roof Details",
    stage5: "Cleanup",
  }.freeze
end
