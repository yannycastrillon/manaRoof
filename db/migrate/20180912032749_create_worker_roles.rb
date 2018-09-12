class CreateWorkerRoles < ActiveRecord::Migration[5.2]
  def change
    create_table :worker_roles do |t|
      t.date :date_started
      t.boolean :active
      t.string :years_experience
      t.belongs_to :role, foreign_key: true
      t.belongs_to :worker, foreign_key: true

      t.timestamps
    end
  end
end
