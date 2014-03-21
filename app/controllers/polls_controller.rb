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

    if current_user.polls.create(poll_params)
      render :json => @poll
    else
      render :json => @poll.errors.full_messages
    end
  end

  def show
    @poll = Poll.find(params[:id]);
  end

  private 


  def poll_params
    params.require(:poll).permit(:title, :answer_choices_attributes => [:body])
  end
  
end
