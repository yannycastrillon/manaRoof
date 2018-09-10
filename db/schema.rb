# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_09_10_040705) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "companies", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.string "street", null: false
    t.string "phone_number"
    t.string "county", default: "", null: false
    t.string "city", default: "", null: false
    t.string "state", default: "", null: false
    t.string "country", default: "", null: false
    t.integer "zipcode"
    t.bigint "contact_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["contact_id"], name: "index_companies_on_contact_id"
  end

  create_table "contacts", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email", default: "", null: false
    t.string "cell_phone"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_contacts_on_email"
  end

  create_table "employees", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.date "date_of_birth"
    t.string "gender"
    t.string "driver_license", null: false
    t.decimal "salary_per_hour"
    t.string "ssn", default: ""
    t.string "cell_phone"
    t.string "email", default: "", null: false
    t.string "street"
    t.string "second_address"
    t.string "city", default: "", null: false
    t.string "state", default: "", null: false
    t.integer "zipcode"
    t.string "nationality"
    t.date "start_date"
    t.string "phone_number"
    t.string "status"
    t.string "employable_type"
    t.bigint "employable_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email", "driver_license"], name: "index_employees_on_email_and_driver_license"
    t.index ["employable_type", "employable_id"], name: "index_employees_on_employable_type_and_employable_id"
  end

  create_table "managers", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "phases", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "project_team_schedulers", force: :cascade do |t|
    t.datetime "start_date"
    t.datetime "end_date"
    t.bigint "team_id"
    t.bigint "project_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["project_id"], name: "index_project_team_schedulers_on_project_id"
    t.index ["team_id"], name: "index_project_team_schedulers_on_team_id"
  end

  create_table "projects", force: :cascade do |t|
    t.string "name"
    t.decimal "price"
    t.string "status"
    t.date "start_date"
    t.date "end_date"
    t.bigint "company_id"
    t.bigint "phase_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["company_id"], name: "index_projects_on_company_id"
    t.index ["phase_id"], name: "index_projects_on_phase_id"
  end

  create_table "teams", force: :cascade do |t|
    t.string "name"
    t.bigint "employee_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["employee_id"], name: "index_teams_on_employee_id"
  end

  create_table "workers", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "companies", "contacts"
  add_foreign_key "project_team_schedulers", "projects"
  add_foreign_key "project_team_schedulers", "teams"
  add_foreign_key "projects", "companies"
  add_foreign_key "projects", "phases"
  add_foreign_key "teams", "employees"
end
