class CreateCompanies < ActiveRecord::Migration[5.2]
  def change
    create_table :companies do |t|
      t.string :name
      t.string :description
      t.string :main_address
      t.integer :phone
      t.string :county
      t.string :city
      t.string :state
      t.string :country
      t.integer :zipcode

      t.references :contact
      t.timestamps
    end
  end
end
