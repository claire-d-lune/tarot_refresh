class CreateReadings < ActiveRecord::Migration[7.0]
  def change
    create_table :readings do |t|
      t.integer :card_1
      t.integer :card_2
      t.integer :card_3
      t.integer :card_4
      t.integer :card_5
      t.string :description
      t.string :comments

      t.timestamps
    end
  end
end
