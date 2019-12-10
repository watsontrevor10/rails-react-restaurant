class CreateItemsTable < ActiveRecord::Migration[6.0]
  def change
    create_table :items do |t|
      t.belongs_to :menu
      t.string :item_name
      t.float :price
      
      t.timestamps
    end
  end
end
