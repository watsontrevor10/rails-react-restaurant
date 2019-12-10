Rails.application.routes.draw do
  namespace :api do
    resources :menus
      resources :items
  end
end
