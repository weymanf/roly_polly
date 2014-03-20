class PollsController < ApplicationController

  before_filter :require_sign_in

  def index
    @polls = current_user.polls
    
  end

  def allpolls
    @polls = Poll.all
  end

  def new
    @poll = Poll.new
  end

  def create
    @poll = Poll.new(poll_params)
    @poll.user_id = current_user.id

    if current_user.polls.create(poll_params)
      render :json => @poll
    else
      render :new
    end
  end

  def show
    @poll = Poll.find(params[:id]);
  end

  private 


  def poll_params
    params.require(:poll).permit(:title)
  end
  
end
