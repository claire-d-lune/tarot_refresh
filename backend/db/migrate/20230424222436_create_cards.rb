class CreateCards < ActiveRecord::Migration[7.0]
  def change
    create_table :cards do |t|
      t.string :name
      t.string :suit
      t.string :description
      t.string :readings
      t.integer :deck_num

      t.timestamps
    end
  end
end
