class ItemWorker < ApplicationRecord
  belongs_to :item
  belongs_to :worker
end
