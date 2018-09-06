class Manager < ApplicationRecord
  has_many :employees, as: :employable
  has_many :contacts
end
