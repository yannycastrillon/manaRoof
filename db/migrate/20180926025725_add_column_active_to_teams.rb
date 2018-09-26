class AddColumnActiveToTeams < ActiveRecord::Migration[5.2]
  def change
    add_column :teams, :active, :boolean, default: true
  end
end
