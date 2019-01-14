Rails.application.routes.draw do
  # get 'hello_world', to: 'hello_world#index'
  root 'pages#index'
  scope 'v1' do
    resources :employees
    resources :teams do
      post 'add_employee', on: :member
      delete 'remove_employee', on: :member
    end
    resources :projects
    resources :companies
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
