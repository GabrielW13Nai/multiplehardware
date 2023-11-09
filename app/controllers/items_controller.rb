class ItemsController < ApplicationController
    wrap_parameters format: []
    rescue_from ActiveRecord::RecordInvalid, with: :items_invalid

    def index
        items = Item.all
        render json: items, only: [:id, :serial_no, :name, :category, :sub_category, :item_no]
    end

    def show
        item = item_one
        render json: item, only: [:id, :serial_no, :name, :category, :sub_category, :item_no], status: :ok
    end

    def create
        item = Item.create!(item_params)
        render json: item, only: [:id, :serial_no, :name, :category, :sub_category,  :item_no], status: :created
    end

    def destroy
        item = Item.find_by(id: params[:id])
        item.destroy
        head :no_content
    end

end

private

def item_one
    item = Item.find_by(id: params[:id])
end

def item_params
    params.permit(:serial_no, :name, :category, :sub_category,  :item_no)
end

def items_invalid invalid
    render json: { error: invalid.record.errors.full_messages }, status: :unprocessable_entity
end

