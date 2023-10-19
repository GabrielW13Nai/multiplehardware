class ManagersController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :invalid_method
  wrap_parameters format: []

  def index
    manager = manager_all
    render json: manager, each_serializer: ManagerSerializer, status: :ok
  end

  def show
    manager = manager_one
    render json: manager, serializer: ManagerSerializer, methods: [:county], status: :ok
  end

  def create
    manager = Manager.create!(params_allow)
    render json: manager, status: :created
  end
end

private

def manager_all
  manager = Manager.all
end

def manager_one
  manager = Manager.find_by(id: params[:id])
end

def params_allow
  params.permit(:name, :age, :branch )
end

def invalid_method invalid
  render json: {error: invalid.record.errors.full_messages}, status: :unprocessable_entity
end
