class UsersController < ApplicationController

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)

    if @user.save
      sign_in(@user)
      render :json => @user
    else
      render :new
    end
  end






  def user_params
    params.require(:user).permit(:username, :user_email, :sesion_token, :password)
  end


end
