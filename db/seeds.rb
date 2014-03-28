# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

user1 = User.create(:username => "guest123", :user_email => "guess@123.com", :password => "guess123")



poll1 = user1.polls.create(:title => "Is this site cool?")

ans1 = poll1.answer_choices.create(:body => "it's okay")
ans2 = poll1.answer_choices.create(:body => "it's awesome")
ans3 = poll1.answer_choices.create(:body => "it's terrible")

ans1.responses.create()
ans1.responses.create()
ans2.responses.create()
ans3.responses.create()

poll2 = user1.polls.create(:title => "What is love?")

ans4 = poll2.answer_choices.create(:body => "baby don't")
ans5 = poll2.answer_choices.create(:body => "hurt me")
ans6 = poll2.answer_choices.create(:body => "no more")

ans4.responses.create()
ans4.responses.create()
ans5.responses.create()
ans5.responses.create()
ans5.responses.create()
ans6.responses.create()
ans6.responses.create()

poll3 = user1.polls.create(:title => "I have no idea what I'm doing.")

ans7 = poll3.answer_choices.create(:body => "Thats true.")
ans8 = poll3.answer_choices.create(:body => "Sounds about right.")
ans9 = poll3.answer_choices.create(:body => "Nah you're a genius.")
ans10 = poll3.answer_choices.create(:body => "Thats Life.")

ans7.responses.create()
ans8.responses.create()
ans9.responses.create()
ans10.responses.create()
ans7.responses.create()
ans8.responses.create()
ans9.responses.create()
