json.array! @guests.select { |guest| guest.age >= 40 && guest.age <= 50 }, :name, :age, :favorite_color
