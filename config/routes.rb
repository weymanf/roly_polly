RolyPolly::Application.routes.draw do
  resources :users, :only => [:create, :new, :show ] 
  resource :session, :only => [:create, :new, :destroy]
  resources :polls 
  resources :responses
  get "/allpolls", to: "polls#allpolls"
  root to: 'polls#index'
  resources :answer_choices
end
