class CreateItems < ActiveRecord::Migration[7.0]
  def change
    create_table :items do |t|
      t.integer :serial_number
      t.string :name
      t.string :size
      t.string :category
      t.string :sub_category
      t.integer :item_number
      t.string :image

      t.timestamps
    end
  end
end
