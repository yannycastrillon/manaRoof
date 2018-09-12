class Role < ApplicationRecord
  has_many :work_roles
  has_many :workers, through: :work_roles 
end
