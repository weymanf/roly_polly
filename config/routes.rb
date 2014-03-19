RolyPolly::Application.routes.draw do
  resources :users, :only => [:create, :new, :show ]
  resource :session, :only => [:create, :new, :destroy]
  resources :polls

  root to: 'polls#index'
end
