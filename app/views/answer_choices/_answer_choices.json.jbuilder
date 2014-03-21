json.(
	answer_choice,
	:id,
	:body,     
   	:poll_id,
   	:created_at,
    :updated_at
)

responses ||= nil
unless responses.nil?
  json.responses(responses) do |response|
    json.partial!("responses/response", :response => response)
  end
end