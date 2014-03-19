# == Schema Information
#
# Table name: polls
#
#  id         :integer          not null, primary key
#  title      :string(255)      not null
#  user_id    :integer
#  created_at :datetime
#  updated_at :datetime
#

class Poll < ActiveRecord::Base

  validates :title, :uniqueness => true, :presence => true

  has_many :answer_choices
  belongs_to :user

  
end
