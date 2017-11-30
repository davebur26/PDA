### Testing task 1 code:

# Carry out static testing on the code below.
# Read through the code.
# Comment any errors you can see without correcting them.

# should read def func1 (val)
def func1 val
  # should read val == 1
  if val = 1
    # indent return true
  return true
  else
    # indent return false
  return false
  end
end

  #dif max a b should read def max(a,b)
dif max a b
  if a > b
    # too much indentation
      return a
  else
    # indent and should read "return b"
  b
  end
end
# delete end
end

# should read def looper()
def looper
  for i in 1..10
    # indent puts i
  puts i
  end
  # insert "return i"
end

failures = 0

# should read if looper() == 10
if looper == 10
  puts "looper passed"
else
  puts "looper failed"
  failures = failures + 1
  # if statement needs 'end'


if func1(3) == false
  puts "func1(3) passed"
else
  puts "func1(3) failed"
  failures = failures + 1
end


if max(100,1) == 100
  puts "max(100,1) passed"
else
  puts "func1(3) failed"
  # spelling mistake should read failures = failures + 1
  failrues = failures + 1
end

#No logic statement
#should read if failures == 0
if failures
  # should read "Test Passed"
  puts "Test Failed"
else
  # should read "Test Failed"
  puts "Test Passed"
end
