class Employee < ApplicationRecord
  belongs_to :employable, polymorphic: true
  has_many :teams

  validates :email, :driver_license, uniqueness: true

  STATUSES = {
    active: 'active',
    no_active: 'no_active'
  }

  def status_name
    STATUSES[status]
  end
end
