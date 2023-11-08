class Worker < ApplicationRecord
  belongs_to :manager
  has_many :item_workers
  has_many :items, through: :item_workers
end
