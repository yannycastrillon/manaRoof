FactoryBot.define do
  factory :company do
     name { Faker::Company.name }
     description { "Test Description" }
     phone_number { Faker::PhoneNumber.phone_number }
     county { "West Hollywood" }
     street { Faker::Address.street_address }
     city { Faker::Address.city }
     state { Faker::Address.state_abbr }
     zipcode { Faker::Address.zip_code }
     country { "USA" }
     contact { create(:contact) }
  end
end
