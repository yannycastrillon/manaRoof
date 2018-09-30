require 'rails_helper'

RSpec.describe ProjectsController, type: :request do
  describe 'get #index' do
    context 'when user is login' do
      it 'must list all projects' do
        get projects_path

        expect(response).to be_successful
      end
      it 'must response as json format' do
        get projects_path

        expect(response.content_type).to eq 'application/json'
      end
    end

  end

  describe 'get #show' do
    let(:project) { create(:project, :in_construction) }

    context 'when user is login' do
      it "must bring an project's details" do
        get project_path(id: project.id)
        parse_body = JSON.parse(response.body)

        expect(response).to be_successful
        expect(parse_body["name"]).to_not be_nil
      end
      it 'must response as json format' do
        get project_path(id: project.id)

        expect(response.content_type).to eq "application/json"
      end
    end
  end

  describe "post #create" do
    let(:company) { create(:company) }
    let(:phase) { create(:phase, :initiation) }

    context 'when user is login' do
      context 'when creating a new project' do
        it 'must persist project' do
          expect {
            post projects_path, params: { project: { name: "Yanny Project",
                                                     start_date: Date.today,
                                                     end_date: Date.today + 10.days,
                                                     company_id: company.id,
                                                     phase_id: phase.id
                                                   } }
          }.to change{ Project.count }.by(1)
        end

        it 'must return a head: created' do
          post projects_path, params: { project: { name: "Yanny Project",
                                                   start_date: Date.today,
                                                   end_date: Date.today + 10.days,
                                                   company_id: company.id,
                                                   phase_id: phase.id
                                                 } }

          expect(response).to have_http_status(:created)
        end
      end
      # context 'When creating a new project without company' do
      #   it "must raise an exception" do
      #     post projects_path, params: { project: { name: "Yanny Project",
      #                                              start_date: Date.today,
      #                                              end_date: Date.today + 10.days,
      #                                              phase_id: phase.id
      #                                            } }
      #     binding.pry
      #     expect(JSON.parse(response.body)["errors"]).to include("Company is missing")
      #   end
      # end
    end
  end

  describe 'Put #update' do
    let(:project) { create(:project, :in_construction) }

    context 'when user is login' do
      context 'when updating an existing project' do
        it 'must update the fields' do
          put project_path(id: project.id ), params: { project: { name: 'Yanny' } }

          parse_body = JSON.parse(response.body)

          expect(parse_body["name"]).to eql 'Yanny'
        end
        it 'must respond success' do
          put project_path(id: project.id), params: { project: { name: 'Yanny' } }
          expect(response).to be_successful
        end
      end
    end
  end

  describe 'Delete #destroy' do
    let(:project) { create(:project, :in_construction) }

    context "When user is login" do
      it "must inactivate project" do
        delete project_path(id: project.id)

        expect(response).to be_successful
      end
    end
  end

end
