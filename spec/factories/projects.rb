FactoryBot.define do
  factory :project do
    name { Faker::University.name }
    price { Faker::Number.decimal(2) }
    start_date { Faker::Date.between(Date.today, 5.days.from_now) }
    end_date { start_date + 10.days }
    company { create(:company) }

    trait :in_initiation do
      phase { create(:phase, :initiation) }
    end
    trait :in_planning do
      phase { create(:phase, :planning) }
    end
    trait :in_construction do
      phase { create(:phase, :construction) }
    end
    trait :in_closure do
      phase { create(:phase, :closure) }
    end
  end
end
