class Company < ApplicationRecord
  has_many :contacts
  has_many :managers, through: :contacts
end
