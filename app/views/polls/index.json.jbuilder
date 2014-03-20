json.array!(@polls) do |poll|
	 json.partial!("polls/poll", :poll => poll)
end