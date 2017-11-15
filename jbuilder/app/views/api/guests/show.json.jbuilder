json.partial! 'api/guests/guest', guest: @guest

json.gifts @guest.gifts, :title, :description

# json.array! @guest.gifts, :title, :description
