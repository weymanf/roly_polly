class ResponsesController < ApplicationController

  protect_from_forgery :except => :receive_text

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


  def receive_txt
    answer_choice_id = params[:Body][3..-1].to_i
    puts params[:Body]
    answer = AnswerChoice.find(answer_choice_id)
    if answer
      answer.responses.create()
      render :json => answer
    else  
      render :text => "wrong shit"
    end
  end

  private

  def response_params
     
  end

end
