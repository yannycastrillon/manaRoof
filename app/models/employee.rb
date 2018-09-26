class Employee < ApplicationRecord
  belongs_to :employable, polymorphic: true
  belongs_to :team

  validates :email, uniqueness: true
  validates :driver_license, uniqueness: true

  scope :actives, -> {
    self.where(active: true)
  }

  scope :inactives, -> {
    self.where(active: false)
  }

  STATUSES = {
    active: 'active',
    no_active: 'no_active'
  }

  def status_name
    STATUSES[status]
  end
end
