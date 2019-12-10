class ChangeNameColumn < ActiveRecord::Migration[6.0]
  def change
    remove_column :items, :name
  end

  def add 
    add_column :itmes, :item_name
  end
end
