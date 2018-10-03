Rails.application.routes.draw do
  root 'pages#index'
  resources :employees
  resources :teams do
    post 'add_employee', on: :member
    delete 'remove_employee', on: :member
  end
  resources :projects
  resources :companies
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
