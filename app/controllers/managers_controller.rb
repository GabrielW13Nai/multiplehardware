class ManagersController < ApplicationController

  def index
    manager = manager_all
    render json: manager, only: [:name, :branch], status: :ok
  end

  def show
    manager = manager_one
    render json: manager, only: [:name, :branch], status: :ok
  end
end

private

def manager_all
  manager = Manager.all
end
def manager_one
  manager = Manager.find_by(id: params[:id])
end
