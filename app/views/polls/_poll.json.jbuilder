json.(
	poll,
	:id,
	:title,    
	:user_id,
    :created_at,
    :updated_at
)

json.user poll.user.username

answer_choices ||= nil
unless answer_choices.nil?
  json.answer_choices(answer_choices) do |answer_choice|
    json.partial!("answer_choices/answer_choices", :answer_choice => answer_choice, responses: answer_choice.responses)
  end
end