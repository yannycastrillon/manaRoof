class CreateProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
      t.string :name
      t.decimal :price
      t.string :status
      t.date :start_date
      t.date :end_date
      t.belongs_to :company, foreign_key: true
      t.belongs_to :phase, foreign_key: true

      t.timestamps
    end
  end
end
