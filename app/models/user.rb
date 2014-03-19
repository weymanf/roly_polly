# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string(255)      not null
#  user_email      :string(255)      not null
#  password_digest :string(255)
#  session_token   :string(255)
#  created_at      :datetime
#  updated_at      :datetime
#

class User < ActiveRecord::Base

  attr_reader :password

  before_validation :ensure_token

  validates :session_token, :presence => true
  validates :username, :user_email, :password_digest, :presence => true
  validates :username, :user_email, :uniqueness => true

  def self.find_by_credentials(email, pw)
    user = User.find_by_user_email(email)
    if user && user.is_password?(pw)
      user
    else
      nil
    end
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64(16)
    self.save!
    self.session_token
  end

  def ensure_token
    self.session_token ||= SecureRandom::urlsafe_base64(16)
  end

  def password=(pw)
     if pw.present?
      @password = pw
      self.password_digest = BCrypt::Password.create(pw)
    end
  end

  def is_password?(pw)
     BCrypt::Password.new(self.password_digest).is_password?(pw)
  end

end
