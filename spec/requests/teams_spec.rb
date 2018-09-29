require 'rails_helper'

RSpec.describe TeamsController, type: :request do
  describe 'get #index' do
    context 'when user is login' do
      it 'must list all teams' do
        get teams_path

        expect(response).to be_successful
      end
      it 'must response as json format' do
        get teams_path

        expect(response.content_type).to eq 'application/json'
      end
    end

  end

  describe 'get #show' do
    let(:team) { create(:team) }

    context 'when user is login' do
      it "must bring team's details" do
        get team_path(id: team.id)
        parse_body = JSON.parse(response.body)

        expect(response).to be_successful
        expect(parse_body["name"]).to_not be_nil
      end
      it 'must response as json format' do
        get team_path(id: team.id)

        expect(response.content_type).to eq "application/json"
      end
    end
  end

  describe "post #create" do
    let(:team)  { build(:team) }

    context 'when user is login' do
      context 'when creating a new manager team' do
        it 'must persist team' do
          expect {
            post teams_path, params: { team: team.attributes }
          }.to change{ Team.count }.by(1)
        end

        it 'must return a head: created' do
          post teams_path, params: { team: team.attributes }

          expect(response).to have_http_status(:created)
        end
      end

      context 'when creating a new worker team' do
        it 'must persist team' do
          expect {
            post teams_path, params: { team: team.attributes }
          }.to change{ Team.count }.by(1)
        end
        it 'must return a head: created' do
          post teams_path, params: { team: team.attributes }

          expect(response).to have_http_status(:created)
        end
      end
    end
  end

  describe 'Put #update' do
    let(:team) { create(:team) }

    context 'when user is login' do
      context 'when updating an existing team' do
        it 'must update the fields' do
          put team_path(id: team.id), params: { team: { name: 'Riverside' } }

          my_team = Team.find(team.id)

          expect(my_team.name).to eql 'Riverside'
        end
        it 'must respond success' do
          put team_path(id: team.id), params: { team: { first_name: 'Riverside' } }
          expect(response).to be_successful
        end
      end
    end
  end

  describe 'Delete #destroy' do
    let(:team) { create(:team) }

    context "When user is login" do
      it "must inactivate team" do
        delete team_path(id: team.id)

        expect(team.reload.active).to be_falsey
        expect(response).to be_successful
      end
    end
  end

  describe '#add_employee' do
    let(:team) { create(:team) }
    let(:employee) { create(:employee, :as_worker) }

    context "when team and employee exists" do
      it "must add employee to the team" do
        expect {
          post add_employee_team_path(id: team.id), params: { employee_id: employee.id }
        }.to change{team.employees.count}.by(1)
        expect(response).to be_successful
      end
    end
    context "when employee doesn't exists" do
      it "must expect a not found request" do
        post add_employee_team_path(id: team.id)

        expect(response).to have_http_status(:not_found)
        expect(JSON.parse(response.body)['errors']).to include("Couldn't find Employee without an ID")
      end
    end
    context "when team doesn't exists" do
      it "must expect a not found request" do
        post add_employee_team_path(id: 9999)

        expect(response).to have_http_status(:not_found)
        expect(JSON.parse(response.body)['errors']).to include("Couldn't find Team with 'id'=9999")
      end
    end
  end

  describe '#remove_employee' do
    let(:team) { create(:team) }
    let(:employee) { create(:employee, :as_worker) }

    context "when team and employee exists" do
      it "must remove employee from the team" do
        delete remove_employee_team_path(id: team.id), params: { employee_id: employee.id }

        expect(team.employees).to_not include(employee)
        expect(response).to be_successful
      end
    end
    context "when employee doesn't exists" do
      it "must expect a not found request" do
        delete remove_employee_team_path(id: team.id)

        expect(response).to have_http_status(:not_found)
        expect(JSON.parse(response.body)['errors']).to include("Couldn't find Employee without an ID")
      end
    end
    context "when team doesn't exists" do
      it "must expect a not found request" do
        delete remove_employee_team_path(id: 9999)

        expect(response).to have_http_status(:not_found)
        expect(JSON.parse(response.body)['errors']).to include("Couldn't find Team with 'id'=9999")
      end
    end
  end
end
