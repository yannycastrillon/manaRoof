class RemoveDriverLicenceConstraint < ActiveRecord::Migration[5.2]
  def change
    change_column :employees, :driver_license, :string, null: true 
  end
end
