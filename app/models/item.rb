class Item < ApplicationRecord
  has_many :item_workers, dependent: :destroy
  has_many :workers, through: :item_workers
end
