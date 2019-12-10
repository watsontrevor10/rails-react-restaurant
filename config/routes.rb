Rails.application.routes.draw do
  namespace :api do
    resources :menus
      resources :lists
  end
end
