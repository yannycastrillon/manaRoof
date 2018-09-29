Rails.application.routes.draw do
  resources :employees
  resources :teams do
    post 'add_employee', on: :member
    delete 'remove_employee', on: :member
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
