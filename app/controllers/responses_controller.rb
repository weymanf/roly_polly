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


  def receive_txt
    answer_choice_id = params["body"][3..-1].to_i
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
