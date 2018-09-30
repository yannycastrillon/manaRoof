class AddActiveAndStatusColumnsToEmployeeTeams < ActiveRecord::Migration[5.2]
  def change
    add_column :employee_teams, :active, :boolean
    add_column :employee_teams, :status, :string
  end
end
