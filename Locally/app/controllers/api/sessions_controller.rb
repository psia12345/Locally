class Api::SessionsController < ApplicationController
  def new
  end

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      login(@user)
      render 'api/users/show'
    else
      render json: ['Invalid username/password'], status: 401
    end
  end

  def destroy
    @user = current_user
    logout(@user)
    render 'api/session/new'
  end

  private
  def user_params
    params.require(:user).permit(:username, :password)
  end
end
