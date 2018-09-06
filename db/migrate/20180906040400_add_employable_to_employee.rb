class AddEmployableToEmployee < ActiveRecord::Migration[5.2]
  def change
    add_reference :employees, :employable, polymorphic: true, index: true
  end
end
