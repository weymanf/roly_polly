module SessionsHelper

  def current_user
    return nil if session[:session_token].nil?
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def login?
    !!current_user
  end

  def sign_in(user)
    @current_user = user
    session[:token]
  end

  def sign_out
    current_user.reset_session_token!
    session[:session_token] = nil
  end

  def require_sign_in
    redirect_to new_session_url unless login?
  end

end
