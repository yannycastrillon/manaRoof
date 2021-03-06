class Worker < ApplicationRecord
  has_one :employee, as: :employable
  has_many :work_roles
  has_many :roles, through: :work_roles
end
