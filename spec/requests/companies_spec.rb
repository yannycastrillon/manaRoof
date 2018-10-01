require 'rails_helper'

RSpec.describe CompaniesController, type: :request do
  describe 'get #index' do
    context 'when user is login' do
      it 'must list all companies' do
        get companies_path

        expect(response).to be_successful
      end
      it 'must response as json format' do
        get companies_path

        expect(response.content_type).to eq 'application/json'
      end
    end

  end

  describe 'get #show' do
    let(:company) { create(:company) }

    context 'when user is login' do
      it "must bring an company's details" do
        get company_path(id: company.id)
        parse_body = JSON.parse(response.body)

        expect(response).to be_successful
        expect(parse_body["name"]).to_not be_nil
      end
      it 'must response as json format' do
        get company_path(id: company.id)

        expect(response.content_type).to eq "application/json"
      end
    end
  end

  describe "post #create" do
    let(:company) { build(:company) }
    let(:contact) { create(:contact) }

    context 'when user is login' do
      context 'when creating a new company' do
        it 'must persist company' do
          expect {
            post companies_path, params: { company: { name: "Yanny Company",
                                                      street: "7045 Hawthorn",
                                                      contact_id: contact.id } }
          }.to change{ Company.count }.by(1)
        end

        it 'must return a head: created' do
          post companies_path, params: { company: { name: "Yanny Company",
                                                    street: "7045 Hawthorn",
                                                    contact_id: contact.id } }

          expect(response).to have_http_status(:created)
        end
      end
    end
  end

  describe 'Put #update' do
    let(:company) { create(:company) }

    context 'when user is login' do
      context 'when updating an existing company' do
        it 'must update the fields' do
          put company_path(id: company.id ), params: { company: { name: 'Yanny Company' } }

          parse_body = JSON.parse(response.body)

          expect(parse_body["name"]).to eql 'Yanny Company'
        end
        it 'must respond success' do
          put company_path(id: company.id), params: { company: { name: 'Yanny Company' } }

          expect(response).to be_successful
        end
      end
    end
  end

  describe 'Delete #destroy' do
    let(:company) { create(:company) }

    context "When user is login" do
      it "must inactivate company" do
        delete company_path(id: company.id)

        expect(response).to be_successful
      end
    end
  end

end
