Rails.application.routes.draw do
  # routes.rb handles with what it's shown on views folder
  # we are trying to get currencies/index.html.erb as our root path
  root 'currencies#index'
  post 'search', to: 'currencies#search'
  post 'calculate', to: 'currencies#calculate'
end
