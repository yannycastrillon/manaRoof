class CreateEmployees < ActiveRecord::Migration[5.2]
  def change
    create_table :employees do |t|
      t.string :first_name
      t.string :last_name
      t.date :date_of_birth
      t.decimal :salary_per_hour
      t.integer :ssn
      t.integer :cell_phone
      t.string :email
      t.string :main_address
      t.string :second_address
      t.string :city
      t.string :state
      t.integer :zipcode
      t.string :nationality
      t.datetime :start_date
      t.integer :phone
      t.string :status

      t.timestamps
    end
  end
end
