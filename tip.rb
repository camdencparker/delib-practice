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

# Given a string, write a function that returns true if it is a palindrome, and false if it is not. (A palindrome is a word that reads the same both forward and backward.)

# Input: “racecar”
# Output: true

# Input: “baloney”
# Output: false

# create a function that accepts a string
# use reverse method on string and set to backwards variable
# check if backwards is equal to string if true return true if false return false

def palindrome(string)
  backwards = string.reverse
  if backwards == string
    true
  else
    false
  end
end

p palindrome("racecar")
p palindrome("baloney")

# Given two strings of equal length, write a function that returns the number of characters that are different between the two strings.

# Input: "ABCDEFG", "ABCXEOG"
# Output: 2

# Explanation: While the A, B, C, E, and G are in the same place for both strings, they have different characters in the other spaces. Since there are 2 such spaces that are different (the D and F in the first string), we return 2.

# Input: "ABCDEFG", "ABCDEFG",
# Output: 0

  #create a funciton that accepts two strings of equal length
  #create an empty array to house the different characters
  #create an index variable equal to zero
  #loop through first string and compare it with the second string
  #if chars are different push into diff_char array
  #return length of diff_char array
  
  def contains(string1, string2)
    diff = []
    index = 0
    
    while index < string1.length
      if string1[index] != string2[index]
        diff << string2[index]
      end
      index += 1
    end
    diff.length
  end

  p contains("ABCDEFG", "ABCXEOG")
  p contains("ABCDEFG", "ABCDEFG")

#   The Collatz Conjecture or 3x+1 problem can be summarized as follows:

# Take any positive integer n. If n is even, divide n by 2 to get n / 2. If n is odd, multiply n by 3 and add 1 to get 3n + 1. Repeat the process indefinitely. The conjecture states that no matter which number you start with, you will always reach 1 eventually.

# Given a number n, return the number of steps required to reach 1.

# Examples
# Starting with n = 12, the steps would be as follows:

# 12  8
# 6   4
# 3   2
# 10  1
# 5   
# 16  
# 8
# 4
# 2
# 1

# Resulting in 9 steps. So for input n = 12, the return value would be 9.


# create a function that accepts a number
# create a step variable to keep track of the amount of steps it will take
# use a while loop that until n is equal to 1 will run
  # if n can be divided by two its even then divide n by 2
  # if n is odd multiply it by and then add 1 
  # increment step by 1
  # return step

  def steps(n)
    step = 0
    while n > 1
      if n % 2 == 0
        n = n / 2
      else
        n = n * 3 + 1
      end
      step += 1
    end
    step
  end

  p steps(12)

#   Given two arrays of strings, return a new string that contains every combination of a string from the first array concatenated with a string from the second array.

# Input: ["a", "b", "c"], ["d", "e", "f", "g"]
# Output: ["ad", "ae", "af", "ag", "bd", "be", "bf", "bg", "cd", "ce", "cf", "cg"]

  # create a function that accepts two arrays of strings
    # create an index variable 
    # create empty solution array
    # compare arrays to find longest length 
    # loop through the longest length array
    # then loop through the second array
    # place both array elements into new array as one string

    def combos(array1, array2)
      index = 0
      inner = 0
      solution = []
      while index < array1.length
        while inner < array2.length
          solution << array1[index] + array2[inner]
          inner += 1
        end
        index += 1
        inner = 0
      end
      solution
    end

   p combos(["a", "b", "c"], ["d", "e", "f", "g"])

#    If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

# Find the sum of all the multiples of 3 or 5 below 1000.
# Output:233168

# create a function that takes in a number
 # create an array for the multiples of 3 and 5
 # create an index
 # use a while loop 
 # if index divided 3 or 5 has no remainder put into multiples array
 # increment index by 1
 # use reduce method to get sum of all multiples array elements

def sum_multiples(n)
  multiples = []
  index = 1 
  while index < n 
    if index % 3 == 0 || index % 5 == 0
      multiples << index
    end
  index += 1
  end
  multiples.reduce(:+)
end 

p sum_multiples(1000)

# Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

#Output: 4613732

# 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

# By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

def fibo()
  x = 1
  y = 1
  fibo_arr = []
  even = []
  index = 1
  fibo_num = 0
    while fibo_num < 4000000 
      fibo_num = x + y
      x = y 
      y = fibo_num
      fibo_arr << fibo_num
    end
    while index < fibo_arr.length
      if fibo_arr[index] % 2 == 0
        even << fibo_arr[index]  # skips number 2 and goes to the number 8 in sequence as first element of even array
      end
      index += 1
    end
    p even
    even.reduce(:+)
end

p fibo()

# The prime factors of 13195 are 5, 7, 13 and 29.

# What is the largest prime factor of the number 600851475143 ?

require 'prime'
number = 13256 
p Prime.each(number).select{ |n| number % n == 0 }.last