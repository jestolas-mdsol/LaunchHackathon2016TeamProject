Rails.application.routes.draw do
  root 'users#index'
  get "pos" => 'pos#calculator'
  get 'login'   => 'sessions#new'
  post 'login'   => 'sessions#create'
  delete 'logout'  => 'sessions#destroy'

  resources :bitcoin_exchanges
  resources :vendors do
    collection do
      get :authenticate
      get :oauth_callback
    end
  end

  post '/generate' => 'verifications#generate_code'
  post '/verify' => 'verifications#verify_code'
  
  resources :bitcoin_exchanges

  post 'payment' => 'bitcoin_exchanges#payment'
  
  get 'checkout' => 'bitcoin_exchanges#checkout'
  get 'payment' => 'bitcoin_exchanges#payment'
  # get 'braintree/create'
  # get 'braintree/edit'
  # get 'braintree/update'
  # get 'braintree/destroy'
  # get 'braintree/getClientToken'
  # get 'braintree/config'
  # get 'payments/create'
  # get 'payments/edit'
  # get 'payments/update'
  # get 'payments/destroy'
end