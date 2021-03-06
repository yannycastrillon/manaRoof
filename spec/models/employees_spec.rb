require 'rails_helper'

RSpec.describe Employee, type: :model do
  it "has a valid factory employee" do
    expect(create(:employee)).to be_valid
    expect(create(:employee, :as_manager)).to be_valid
  end
  let(:manager) { create(:manager) }

  let(:employee) { create(:employee) }

  describe "ActiveModel Validations" do
    it "must have an unique email" do
      # expect(employee).to validate_uniqueness_of(:email)
      # should validate_uniqueness_of(:email)
    end
    it "must have an unique driver_license" do
      # expect(employee).to validate_uniqueness_of(:driver_license)
      # should validate_uniqueness_of(:driver_license)
    end
  end

  describe "ActiveRecord Associations" do
    # it { expect(employee).to belongs_to(:worker) }
    # it { expect(employee).to have_many(:teams) }
  end
end
