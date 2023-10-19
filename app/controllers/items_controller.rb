class ItemsController < ApplicationController
    def index
        items = Item.all
        render json: items, only: [:name, :description]
    end
end
