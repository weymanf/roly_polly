class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username, :null => false
      t.string :user_email, :null => false
      t.string :password_digest
      t.string :session_token

      t.timestamps
    end

    add_index(:users, :username, :unique => true)
    add_index :users, :user_email, :unique => true
  end
end
