class CreateCompanies < ActiveRecord::Migration[5.2]
  def change
    create_table :companies do |t|
      t.string :name
      t.text :description
      t.string :street,         null: false
      t.string :phone_number
      t.string :county,         default: '', null: false
      t.string :city,           default: '', null: false
      t.string :state,          default: '', null: false
      t.string :country,        default: '', null: false
      t.integer :zipcode

      t.timestamps
    end
  end
end
