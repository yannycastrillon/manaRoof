FactoryBot.define do
  factory :contact do
    first_name { Faker::Name.male_first_name }
    last_name { Faker::Name.last_name }
    email { "#{first_name}.#{last_name}@example.com" }
    cell_phone { Faker::PhoneNumber.cell_phone }
  end
end
