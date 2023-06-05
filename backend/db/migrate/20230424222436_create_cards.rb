class CreateCards < ActiveRecord::Migration[7.0]
  def change
    create_table :cards do |t|
      t.string :name
      t.string :name_short
      t.string :value 
      t.integer :value_int
      t.string :suit
      t.string :arcana
      t.string :meaning_up
      t.string :meaning_rev
      t.string :description
      t.integer :deck_num

      t.timestamps
    end
  end
end
