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
  
  def cap(string)
    # str_arr = string.chars
    index = 1
    while index < string.length 
      string[index] = string[index].upcase
      index += 2
    end
    # new_str = str_arr.join
    # new_str
    string
  end
    

  cap("hello, how are your porcupines today?")

  # Given an array of numbers, write a function that returns a new array that contains all numbers from the original array that are less than 100.

# Input: [99, 101, 88, 4, 2000, 50]
# Output: [99, 88, 4, 50]

# Input: [1000, 1, 100, -10, 10000, 0]
# Output: [1, -10, 0]

# Create a function less_than_hundred
# create a less_hundred set equal to an empty arrray
# create an index set equal to zero
# loop through the array with a while loop 
  # check to see if array[index] is less than 100
    # If true shovel into less_hundred
    # increment the index by one
  #return less_hundred

  def less_one_hundred(array)
    less_hundred = []
    index = 0
    while index < array.length
      if array[index] < 100
        less_hundred << array[index]
        
      end
      index += 1
    end
    less_hundred
  end

 p less_one_hundred([1000, 1, 100, -10, 10000, 0])


#  Write a function that prints out every number from 1 to N, with the following exceptions:

# If the number is divisible by 3, print out "FIZZ".
# If the number is divisible by 5, print out "BUZZ".
# If the number is divisible by both 3 and 5, print out "FIZZBUZZ".

 # create a function that takes in the argument of n 
 # us the map method to create block variable and returns array
  # if num is divisible by 3 and by 5 return FizzBuzz
  # elsif num is divisible by 3 return Fizz
  # elsif num is divisible by just 5 return Buzz
  # else return the num 

 def fizz_buzz(n)
  (1..n).map do |num|
      if num % 3 == 0 && num % 5 == 0
            "FizzBuzz"
      elsif num % 3 == 0
            "Fizz"
      elsif num % 5 == 0
            "Buzz"
      else
           num
     end
 end
end

p fizz_buzz(30)

# Given an array of numbers, write a function that returns a new array whose values are the original array’s value doubled.

# Input: [4, 2, 5, 99, -4]
# Output: [8, 4, 10, 198, -8]

# create a function doubled() that takes in an array
  # use the map method, set block variable to n and then multiply it by 2

  def doubled(array)
    array.map { |n| n * 2 }
  end

  p doubled([4, 2, 5, 99, -4])


# Given a string, write a function that returns true if the “$” character is contained within the string or false if it is not.

# Input: “i hate $ but i love money i know i know im crazy”
# Output: true

# Input: “abcdefghijklmnopqrstuvwxyz”
# Output: false

# create a function called contains() that accepts a string
# use the include method to see if string contains $

def contains(string)
  string.include?("$")
end

p contains("abcdefghijklmnopqrstuvwxyz")

# Given a string, write a function that returns the first occurence of two duplicate characters in a row, and return the duplicated character.

# Input: “abcdefghhijkkloooop”
# Output: “h”


# Write a function that gives the Nth number of the Fibonacci Sequence. The Fibonacci sequence begins with 0 and 1, and every number thereafter is the sum of the previous two numbers. So the sequence goes like this:

# 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, and so on until infinity...

# Input: 9
# Output: 21 (as this is the 9th number of the Fibonacci Sequence)

# create a function that accepts a number
  # create a variable that will represent first num in sequence
  # create a variable for the second num in sequence
  # create a count variable
  # loop while count is less than input number
  # set variable = to x plus y. This is the fibonacci number
  # set x equal to y
  # set y equal to variable 
  # increment count by 1



def fibo(n)
  if n < 3
    1
  else
    x = 1
    y = 1
    count = 3
    while count < n 
      fibo_num = x + y
      x = y 
      y = fibo_num
      count += 1
    end
    fibo_num
  end
end

p fibo(10)