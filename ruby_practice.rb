# Deliberate Ruby Practice

#1
#Read about the Ruby sort method. Then sort the following array of hashes by age. 
# people = [
#   {"name" => "Saron", "age" => 34},
#   {"name" => "Majora", "age" => 28},
#   {"name" => "Danilo", "age" => 45}
# ]

# puts people.sort { |person1, person2| person1["age"] <=> person2["age"] }

#Ruby Methods 3

# #1 Refactor using reduce
# numbers = [1, 2, 4, 2]
# sum = 0
# numbers.each do |number|
#   sum += number
# end
# p sum

# numbers = [1, 2, 4, 2]
# sum = 0
# #both do the same thing
# sum = numbers.reduce(0){ |sum, num| sum + num}
# sum = numbers.reduce(:+)
# p sum

#2
# def scrabble_score(string)
#   points = {'a'=> 1, 'b'=> 3, 'c'=> 3, 'd'=> 2, 'e'=> 1, 'f'=> 4, 'g'=> 2, 'h'=> 4, 'i'=> 1, 'j'=> 8, 'k'=> 5, 'l'=> 1, 'm'=> 3, 'n'=> 1, 'o'=> 1, 'p'=> 3, 'q'=> 10, 'r'=> 1, 's'=> 1, 't'=> 1, 'u'=> 1, 'v'=> 4, 'w'=> 4, 'x'=> 8, 'y'=> 4, 'z'=> 10}
#   word = []
#   index = 0
#   string.downcase
#   string.length.times do 
#     word << string[index]
#     index += 1
#   end
#   return word.reduce(0){ |sum, letter| sum + points[letter]}
# end

# p scrabble_score("left")

#3
# items = [
#   {title: "NoDBA", words: 561, tags: ["nosql", "people", "orm"], type: :book},
#   {title: "Infodeck", words: 1145, tags: ["nosql", "writing"], type: :book},
#   {title: "OrmHate", words: 1718, tags: ["nosql", "orm"], type: :book},
#   {title: "ruby", words: 1313, tags: ["ruby"], type: :article},
#   {title: "DDD_Aggregate", words: 482, tags: ["nosql", "ddd"], type: :book}
# ]

# book = items.select {|item| item[:type] == :book} # get each book hash from the item array, 
# count = book.map {|book| book[:words]} # gets us the total words attribute for each book hash and puts them into a new array
# word_total = count.reduce(:+) # adds each word total together to give us the total as the sum variable, I didn't arrive at this syntax first off(only works for summing, the other way is with a block and inject method)
# p word_total

#4
def mutation?(string_one, string_two)
  all_there = true
  string_two.chars.map { |letter| all_there = false unless string_one.include?(letter) }
  p all_there
end

mutation?("burly", "ruby")