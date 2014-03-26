class PollsController < ApplicationController

  before_filter :require_sign_in, :except => [:allpolls, :show]

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
    @poll = current_user.polls.new(poll_params)
    if @poll.save
      render :json => @poll
    else
      render :json => @poll.errors.full_messages
    end
  end

  def show
    @poll = Poll.find(params[:id])
    
  end

  def destroy
    poll = Poll.find(params[:id])
    poll.destroy
    render :json => poll
  end

  private 


  def poll_params
    params.require(:poll).permit(:title, :answer_choices_attributes => [:body])
  end
  
end
