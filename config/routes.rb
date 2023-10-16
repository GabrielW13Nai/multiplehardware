Rails.application.routes.draw do
  resources :item_workers
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  # get '/workers', to: 'workers#index'
  # get '/workers/:id', to: 'workers#show'
  # post '/workers', to: 'workers#create'
  # patch '/workers/:id', to: 'workers#update'
  # delete '/workers/:id', to: 'workers#destroy'

  resources :workers, only: [:index, :show, :create, :update, :destroy]
  resources :managers, only: [:index, :show, :create, :update, :destroy]

end
