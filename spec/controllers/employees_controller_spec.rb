require 'rails_helper'

RSpec.describe EmployeesController, type: :controller do
  describe "get #index" do
    context "when user is login" do
      it "must list all employee" do
        get employees_path
        pase_body = JSON.parse(response.body)

        expect(response).to be_success
        expect(pase_body.count).to_be >= 1
      end
      it "must response as json format" do
        get employees_path

        expect(response.content_type).to eq "application/json"
      end
    end

  end

  describe "get #show" do
    let(:employee) { create(:employee, :as_manager) }

    context "when user is login" do
      it "must bring an employee's details" do
        get employee_path(id: employee.id)
        pase_body = JSON.parse(response.body)

        expect(response).to be_success
        expect(pase_body[:employee].email).to_not be_nil
      end
      it "must response as json format" do
        get employee_path(id: employee.id)

        expect(response.content_type).to eq "application/json"
      end
    end
  end

  describe "post #create" do
    let(:worker)  { build(:employee, :as_worker) }
    let(:manager) { build(:employee, :as_manager) }

    context "when user is login" do
      context "when creating a new manager employee" do
        it "must persist employee" do
          expect {
            post employees_path, params: { employee: manager.attributes }, format: :json
          }.to change{ Employee.count }.by(1)

          manager_record = Manager.find(manager.employable_id)

          expect(manager_record).to be_present
        end

        it "must return a head: created" do
          post employees_path, params: { employee: manager.attributes }, format: :json

          expect(response).to have_http_status(:created)
        end
      end

      context "when creating a new worker employee" do
        it "must persist employee" do
          expect {
            post employees_path, params: { employee: worker.attributes }, format: :json
          }.to change{ Employee.count }.by(1)

          worker_record = Worker.find(worker.employable_id)

          expect(worker_record).to  be_present
        end
        it "must return a head: created" do
          post employees_path, params: { employee: worker.attributes }, format: :json

          expect(response).to have_http_status(:created)
        end
      end
    end
  end

  describe "Put #update" do
    let(:employee) { create(:employee, :as_manager) }

    context "when user is login" do
      context "when updating an existing employee" do
        it "must update the fields" do
          put employee_path(id: employee.id ), params: {
                                                employee: {
                                                  first_name: "Yanny",
                                                  last_name: "Castrillon",
                                                  email: "yanny.castrillon@example.com"
                                                }
                                               }, format: :json

          emp = Employee.find(employee)

          expect(emp.first_name).to eql "Yanny"
          expect(emp.last_name).to eql "Castrillon"
          expect(emp.email).to eql "yanny.castrillon@example.com"
        end
        it "must respond success" do
          put employee_path(id: employee.id ), params: {
                                                employee: {
                                                  first_name: "Yanny",
                                                  last_name: "Castrillon",
                                                  email: "yanny.castrillon@example.com"
                                                }
                                               }, format: :json
          expect(response).to be_success
        end
      end
    end
  end
end
