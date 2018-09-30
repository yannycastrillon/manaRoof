FactoryBot.define do
  factory :phase, aliases: [:project_phase] do
    name { "Initiation" }
    description { "- Conversation with Client.
                   - Budget Range.
                   - Customer Acceptance Criteria." }

    trait :initiation do
      name { "Initiation" }
      description { "- Conversation with Client.
                     - Budget Range.
                     - Customer Acceptance Criteria." }
    end

    trait :planning do
      name { "Planning" }
      description { "- Define scope and requirements.
                     - Determine actual Budget.
                     - Build project overall time.
                     - Build team's schedule." }
    end

    trait :construction do
      name { "Construction" }
      description { "- Start project implementation.
                     - Keep track on deathlines.
                     - Keep track on Customer Acceptance Criteria.
                     - Manage resources and scope changes." }
    end

    trait :closure do
      name { "Closure" }
      description { "- Close out contract and vendor agreements.
                     - Close out project documents.
                     - Reassign project resources." }
    end
  end
end
