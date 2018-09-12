class CreateRoles < ActiveRecord::Migration[5.2]
  def change
    create_table :roles do |t|
      t.string :name
      t.string :description
      t.date :date_added

      t.timestamps
    end
  end
end
