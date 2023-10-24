class ItemsController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :items_invalid
    wrap_parameters format: []
    def index
        items = Item.all
        render json: items, only: [:name, :description]
    end

    def show
        item = item_one
        render json: item, only: [:name, :description], status: :ok
    end

    def create
        item = Item.create!(item_params)
        render json: item, only: [:name, :description], status: :created
    end

end

private

def item_one
    item = Item.find_by(id: params[:id])
end

def item_params
    params.permit(:name, :description, :image)
end

def items_invalid invalid
    render json: { error: invalid.record.errors.full_messages }, status: :unprocessable_entity
end

