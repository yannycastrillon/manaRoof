class Worker < ApplicationRecord
  has_many :employees, as: :employable
end
