class CreateWorkers < ActiveRecord::Migration[7.0]
  def change
    create_table :workers do |t|
      t.string :name
      t.integer :age
      t.string :department
      t.belongs_to :manager, null: false, foreign_key: true

      t.timestamps
    end
  end
end
