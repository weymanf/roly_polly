class CreateAnswerChoices < ActiveRecord::Migration
  def change
    create_table :answer_choices do |t|
      t.string :body, :null => false
      t.integer :poll_id

      t.timestamps
    end

    add_index(:answer_choices, :poll_id)
    add_index(:answer_choices, :body, :unique => true)
  end
end
