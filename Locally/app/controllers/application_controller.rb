class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  helper_method :current_user, :logged_in?

  def login(user)
    @current_user = user
    session[:session_token] = user.reset_session_token!
  end

  def logout(user)
    user[:session_token] = user.reset_session_token!
    session[:session_token] = nil
  end

  def current_user
    @current_user = User.find_by_session_token(session[:session_token])
  end

  def logged_in?
    @currentUser
  end
end
