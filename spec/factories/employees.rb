FactoryBot.define do
  factory :employee do
    first_name { Faker::Name.male_first_name }
    last_name { Faker::Name.last_name }
    date_of_birth { Faker::Date.birthday(18, 64) }
    gender { Faker::Gender.binary_type }
    driver_license { "#{first_name.first.capitalize}#{last_name.first.capitalize} #{rand(10000..99999)}"  }
    salary_per_hour { 60.00 }
    ssn { "144223456" }
    cell_phone { Faker::PhoneNumber.cell_phone }
    email { "#{first_name}.#{last_name}@example.com" }
    street { Faker::Address.street_address }
    city { Faker::Address.city }
    state { Faker::Address.state_abbr }
    zipcode { Faker::Address.zip_code }
    nationality { Faker::Nation.nationality }

    trait :as_worker do
      # employable_type { "Worker" }
      # employable_id { create(:worker) }
      employable { create(:worker) }
    end

    trait :as_manager do
      # employable_type { "Manager" }
      # employable_id { create(:manager) }
      employable { create(:manager) }
    end
  end

end
