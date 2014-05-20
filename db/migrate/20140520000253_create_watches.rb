class CreateWatches < ActiveRecord::Migration
  def change
    create_table :watches do |t|
        t.integer :user_id
        t.integer :poll_id
      t.timestamps
    end

    add_index :watches, :user_id
    add_index :watches, :poll_id
  end
end
