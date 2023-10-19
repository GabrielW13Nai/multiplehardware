class CreateItemWorkers < ActiveRecord::Migration[7.0]
  def change
    create_table :item_workers do |t|
      t.belongs_to :item, null: false, foreign_key: true
      t.belongs_to :worker, null: false, foreign_key: true

      t.timestamps
    end
  end
end
