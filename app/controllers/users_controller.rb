class UsersController < ApplicationController


  before_filter :require_sign_in, :only => [:show, :root]


  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)

    if @user.save
      sign_in(@user)
      redirect_to root_url
    else
      render :new
    end
  end

  def show
    @user = User.find(params[:id])
    @polls = @user.polls
  end

  def user_params
    params.require(:user).permit(:username, :user_email, :sesion_token, :password)
  end

  def root
    @user = current_user

  end

end
