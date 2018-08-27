class Employee < ApplicationRecord
  STATUSES = {
    active: 'active',
    no_active: 'no_active'
  }

  def status_name
    STATUSES[status]
  end
end
