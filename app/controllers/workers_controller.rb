class WorkersController < ApplicationController
    def index
        worker = Worker.all
        render json: worker, only: [:name, :department], status: :ok
    end
end
