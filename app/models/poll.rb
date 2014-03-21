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

  validates :title, :presence => true

  has_many :answer_choices, dependent: :destroy
  belongs_to :user

  accepts_nested_attributes_for :answer_choices

  
end
