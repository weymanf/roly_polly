class ResponsesController < ApplicationController

  def create
    @response = Response.new(
      :answer_choice_id => params[:answer_choice_id]
    )

    if @response.save
      render :json => @response
    else
      render :json => @response
    end

  end

  private

  def response_params
     
  end

end
