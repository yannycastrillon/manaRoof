FactoryBot.define do
  factory :team do
    name { GOTFaker::Geography.region }
  end
end
