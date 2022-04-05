# Given a string, write a function that returns a copy of the original string that has every other character capitalized. (Capitalization should begin with the second character.)

#   Input: “hello, how are your porcupines today?”
#   Output: “hElLo, HoW ArE YoUr pOrCuPiNeS ToDaY?”

# Input: "hello world"
# Output: "hElLo wOrLd"

#create a function
  # create an empty array
  # set empty array equal to the string.chars
  # iterate through my array of characters with starting index = 2
  # capitalize each array element
  # join the array
  # return the string
  
  def capitalize(string)
    # str_arr = string.chars
    index = 1
    while index < string.length 
      string[index] = string[index].capitalize
      index += 2
    end
    # new_str = str_arr.join
    # new_str
    string
  end
    

  p capitalize("hello, how are your porcupines today?")