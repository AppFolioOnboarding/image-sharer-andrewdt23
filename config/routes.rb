Rails.application.routes.draw do
  get 'welcome/index', to: 'welcome#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'welcome#index'

  namespace :api do
    resources :image_url, only: [:index, :create, :destroy, :update]
  end

end
