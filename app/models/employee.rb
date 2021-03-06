class Employee < ApplicationRecord

  has_many :employee_teams, inverse_of: :employee
  has_many :teams, through: :employee_teams
  belongs_to :employable, polymorphic: true, dependent: :destroy
  accepts_nested_attributes_for :employee_teams, :teams

  validates :email, uniqueness: true

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
