class ApplicationController < ActionController::Base
    # skip_before_action :verify_token_authenticity
    include ActionController:: Cookies
end