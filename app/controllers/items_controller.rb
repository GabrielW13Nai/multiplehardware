class ItemsController < ApplicationController
  wrap_parameters format: []
  rescue_from ActiveRecord::RecordInvalid, with: :items_invalid
  # rescue_from ActionController::UnpermittedParameters, with: :handle_errors

  def index
      items = Item.all
      render json: items, only: [:id, :serial_number, :name, :size, :category, :sub_category, :item_number]
  end

  def show
      item = item_one
      render json: item, only: [:id, :serial_number, :name, :size, :category, :sub_category, :item_number], status: :ok
  end

  def create
      item = Item.create!(item_params)
      render json: item, only: [:id, :serial_number, :name, :size, :category, :sub_category, :item_number], status: :created
  end

  def update
      item = item_one
      item.update!(item_params)
      render json: item, status: :accepted
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
  params.permit(:serial_number, :name, :size, :category, :sub_category, :item_number, :image)
end

def items_invalid invalid
  render json: { error: invalid.record.errors.full_messages }, status: :unprocessable_entity
end

# def handle_errors
#   render json: {"Unpermitted parameters found": params.to_unsafe_h.except(:controller, :action, :name, :category).keys }, status: :unprocessable_entity
# end

