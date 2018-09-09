class Contact < ApplicationRecord
  belongs_to :manager
  belongs_to :company
end
