class CreateEmployees < ActiveRecord::Migration[5.2]
  def change
    create_table :employees do |t|
      t.string :first_name
      t.string :last_name
      t.date :date_of_birth
      t.string :gender
      t.string :driver_license,       null: false, unique: true
      t.decimal :salary_per_hour
      t.string :ssn,                  default: ''
      t.string :cell_phone
      t.string :email,                default: '',  null: false, unique: true
      t.string :street
      t.string :second_address
      t.string :city,                 default: '', null: false
      t.string :state,                default: '', null: false
      t.integer :zipcode
      t.string :nationality
      t.date :start_date
      t.string :phone_number
      t.string :status

      t.references :employable, polymorphic: true, index: true

      t.timestamps
    end
    add_index :employees, [:email, :driver_license]
  end
end
