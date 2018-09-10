class CreateProjectTeamSchedulers < ActiveRecord::Migration[5.2]
  def change
    create_table :project_team_schedulers do |t|
      t.datetime :start_date
      t.datetime :end_date
      t.belongs_to :team, foreign_key: true
      t.belongs_to :project, foreign_key: true

      t.timestamps
    end
  end
end
