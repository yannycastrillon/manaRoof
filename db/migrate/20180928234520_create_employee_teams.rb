class CreateEmployeeTeams < ActiveRecord::Migration[5.2]
  def change
    create_table :employee_teams do |t|
      t.belongs_to :employee
      t.belongs_to :team

      t.timestamps
    end
  end
end
