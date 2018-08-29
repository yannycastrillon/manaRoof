class Contact < ApplicationRecord
  belongs_to :manager
  has_one :company
end
