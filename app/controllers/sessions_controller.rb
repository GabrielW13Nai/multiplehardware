class SessionsController < ApplicationController
  def index
    byebug
    session[:session_hello] ||= "World"
    cookies[:cookies_hello] ||= "World"
    render json: { session: session, cookies: cookies.to_hash }
  end
  def create
    worker = Worker.find_by(id: params[:id])
    session[:id] = worker.id
    render json: worker
  end
end
