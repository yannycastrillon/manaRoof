class Manager < ApplicationRecord
  has_one :employee, as: :employable
end
