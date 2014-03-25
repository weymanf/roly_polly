json.array!(@polls) do |poll|
	 json.partial!("polls/poll", :poll => poll, :answer_choices => poll.answer_choices)
end