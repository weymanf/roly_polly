# == Schema Information
#
# Table name: answer_choices
#
#  id         :integer          not null, primary key
#  body       :string(255)      not null
#  poll_id    :integer
#  created_at :datetime
#  updated_at :datetime
#

class AnswerChoice < ActiveRecord::Base

  belongs_to :poll

end
