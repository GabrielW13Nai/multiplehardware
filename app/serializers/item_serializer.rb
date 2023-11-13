class ItemSerializer < ActiveModel::Serializer
  attributes :id, :serial_number, :name, :size, :category, :sub_category, :item_number, :image
end
