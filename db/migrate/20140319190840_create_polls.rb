class CreatePolls < ActiveRecord::Migration
  def change
    create_table :polls do |t|
      t.string :title, :null => false
      t.integer :user_id

      t.timestamps
    end

    add_index(:polls, :user_id)
  end
end
