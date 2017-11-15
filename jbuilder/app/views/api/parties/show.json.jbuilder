json.extract! @party, :name, :location

json.guests @party.guests do |guest|
  json.name guest.name
  json.age guest.age
  json.gifts guest.gifts, :title, :description
end
