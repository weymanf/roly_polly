RolyPolly::Application.routes.draw do
  resources :users, :only => [:create, :new, :show ]
end
