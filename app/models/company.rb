class Company < ApplicationRecord
  has_many :projects
  belongs_to :contact
end
