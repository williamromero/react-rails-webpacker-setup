Rails.application.routes.draw do
  
  root 'home#index'

  scope 'home' do
    get 'principal_info', to: 'home#principal_info'
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
