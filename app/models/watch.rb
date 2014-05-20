class Watch < ActiveRecord::Base

  belongs_to :poll
  belongs_to :user

  def create
    user = User.find(current_user.id)
  end

  def destroy

  end

  private

  def watch_params

  end

end
