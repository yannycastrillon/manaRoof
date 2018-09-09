class Worker < ApplicationRecord
  has_one :employee, as: :employable
end
