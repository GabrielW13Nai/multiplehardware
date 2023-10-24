Rails.application.routes.draw do

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  # get '/items', to: 'items#index'
  # get '/items/:id', to: 'items#show'
  # post '/items', to: 'items#create'
  # patch '/items/:id', to: 'items#update'
  # delete '/items/:id', to: 'items#destroy'

  resources :workers, only: [:index, :show, :create, :update, :destroy]
  resources :items, only: [:index, :show, :create, :update, :destroy]
  resources :managers, only: [:index, :show, :create, :update, :destroy]

  # get '/sessions', to: 'sessions#index'

end
