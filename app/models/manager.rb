class Manager < ApplicationRecord
  has_one :employee, as: :employable
  has_many :contacts
  has_many :companies, through: :contacts
end
