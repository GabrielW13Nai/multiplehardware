class CreateManagers < ActiveRecord::Migration[7.0]
  def change
    create_table :managers do |t|
      t.string :name
      t.integer :age
      t.string :branch

      t.timestamps
    end
  end
end
