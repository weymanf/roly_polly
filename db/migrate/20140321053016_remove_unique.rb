class RemoveUnique < ActiveRecord::Migration
  def change
    remove_index :answer_choices, :column => [:body]
  end
end
