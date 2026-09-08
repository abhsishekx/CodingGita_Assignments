
# Topic 1: Type Casting

# Q1
age = "25"
age = int(age)
print(age)
print(type(age))

# Q2
marks = "75.5"
marks = float(marks)
print(marks)
print(type(marks))

# Q3
number = 50
number = float(number)
print(number)
print(type(number))

# Q4: int() removes the decimal part; it does not round.
marks = 85.9
marks = int(marks)
print(marks)
print(type(marks))

# Q5
roll_number = 101
roll_number = str(roll_number)
print(roll_number)
print(type(roll_number))

# Q6
age = int("18")
score = float("92.5")
number_text = str(100)
whole_number = int(45.8)
print(age, type(age))
print(score, type(score))
print(number_text, type(number_text))
print(whole_number, type(whole_number))

# Q7 output:
# 20
# 10
# 25
# <class 'int'>
# <class 'int'>
# <class 'str'>
a = "20"
b = int(a)
c = 10.8
d = int(c)
e = 25
f = str(e)
print(b)
print(d)
print(f)
print(type(b))
print(type(d))
print(type(f))

# Q8
age = "19"
new_age = int(age) + 1
print("Age:", new_age)

# Q9
marks = "85"
final_marks = int(marks) + 5
print("Final Marks:", final_marks)

# Q10
price = "1499.50"
total_amount = float(price) + 99.50
print("Total Amount:", total_amount)



# Topic 2: Arithmetic Operators


# Q11
a = 20
b = 6
print("Addition:", a + b)
print("Subtraction:", a - b)
print("Multiplication:", a * b)
print("Division:", a / b)
print("Floor Division:", a // b)
print("Remainder:", a % b)
print("Power:", a ** b)

# Q12 output: 3.4, 3, 2
# / gives normal division, // gives complete whole groups, and % gives remainder.
a = 17
b = 5
print(a / b)
print(a // b)
print(a % b)

# Q13 output: 20.  Multiplication happens first.
result = 10 + 5 * 2
print(result)
result = (10 + 5) * 2
print(result)

# Q14 output: 10
result = 20 - 4 * 3 + 2
print(result)
result = 20 - (4 * 3) + 2
print(result)

# Q15 output: 8, 9, 100
print(2 ** 3)
print(3 ** 2)
print(10 ** 2)
side = 5
area = side ** 2
print("Area of Square:", area)

# Q16
notebook_price = 80
pen_price = 20
pencil_price = 10
total_amount = notebook_price + pen_price + pencil_price
print("Total Amount:", total_amount)

# Q17
notebook_cost = 3 * 50
pen_cost = 2 * 15
calculator_cost = 1 * 500
total_bill = notebook_cost + pen_cost + calculator_cost
print("Notebook Cost:", notebook_cost)
print("Pen Cost:", pen_cost)
print("Calculator Cost:", calculator_cost)
print("Total Bill:", total_bill)

# Q18
students = 47
group_size = 5
complete_groups = students // group_size
students_left = students % group_size
print("Complete Groups:", complete_groups)
print("Students Left:", students_left)

# Q19
python_marks = 85
mathematics_marks = 78
physics_marks = 92
total_marks = python_marks + mathematics_marks + physics_marks
average_marks = total_marks / 3
print("Total Marks:", total_marks)
print("Average Marks:", average_marks)

# Q20
english = 78
mathematics = 85
python = 92
physics = 81
chemistry = 74
total_marks = english + mathematics + python + physics + chemistry
percentage = total_marks / 5
print("Total Marks:", total_marks)
print("Percentage:", percentage, "%")



# Topic 3: Digit Extraction using % and //


# Q21
number = 583
ones = number % 10
print("Ones Digit:", ones)

# Q22
number = 583
tens = (number // 10) % 10
print("Tens Digit:", tens)

# Q23
number = 583
hundreds = number // 100
print("Hundreds Digit:", hundreds)

# Q24
number = 746
ones = number % 10
tens = (number // 10) % 10
hundreds = number // 100
print("Ones Digit:", ones)
print("Tens Digit:", tens)
print("Hundreds Digit:", hundreds)

# Q25
number = 5829
ones = number % 10
tens = (number // 10) % 10
hundreds = (number // 100) % 10
thousands = number // 1000
print("Ones Digit:", ones)
print("Tens Digit:", tens)
print("Hundreds Digit:", hundreds)
print("Thousands Digit:", thousands)

# Q26
number = 583
ones = number % 10
tens = (number // 10) % 10
hundreds = number // 100
digit_sum = ones + tens + hundreds
print("Sum of Digits:", digit_sum)

# Q27
number = 4726
ones = number % 10
tens = (number // 10) % 10
hundreds = (number // 100) % 10
thousands = number // 1000
digit_sum = ones + tens + hundreds + thousands
print("Sum of Digits:", digit_sum)

# Q28
number = 234
ones = number % 10
tens = (number // 10) % 10
hundreds = number // 100
digit_product = ones * tens * hundreds
print("Product of Digits:", digit_product)

# Q29
number = 583
ones = number % 10
tens = (number // 10) % 10
hundreds = number // 100
reversed_number = ones * 100 + tens * 10 + hundreds
print("Original Number:", number)
print("Reversed Number:", reversed_number)

# Q30
number = 4726
ones = number % 10
tens = (number // 10) % 10
hundreds = (number // 100) % 10
thousands = number // 1000
reversed_number = ones * 1000 + tens * 100 + hundreds * 10 + thousands
print("Original Number:", number)
print("Reversed Number:", reversed_number)

# Q31
number = 5834
ones = number % 10
tens = (number // 10) % 10
hundreds = (number // 100) % 10
thousands = number // 1000
print("Thousands Place:", thousands * 1000)
print("Hundreds Place:", hundreds * 100)
print("Tens Place:", tens * 10)
print("Ones Place:", ones)

# Q32
number = 583
ones = number % 10
hundreds = number // 100
difference = hundreds - ones
print("Difference:", difference)

# Q33
number = 583
ones = number % 10
print("Ones Digit:", ones)

# Q34
number = 9365
thousands = number // 1000
hundreds = (number // 100) % 10
tens = (number // 10) % 10
ones = number % 10
print("Thousands Digit:", thousands)
print("Hundreds Digit:", hundreds)
print("Tens Digit:", tens)
print("Ones Digit:", ones)

# Q35
hundreds = 5
tens = 8
ones = 3
number = hundreds * 100 + tens * 10 + ones
print("Number:", number)



# Topic 4: Real-Life Arithmetic Problems


# Q36
principal = 10000
rate = 5
time = 2
simple_interest = principal * rate * time / 100
print("Simple Interest:", simple_interest)

# Q37
length = 15
width = 8
area = length * width
perimeter = 2 * (length + width)
print("Area:", area, "cm²")
print("Perimeter:", perimeter, "cm")

# Q38
radius = 7
pi = 3.14
area = pi * radius ** 2
print("Area of Circle:", area, "cm²")

# Q39
celsius = 35
fahrenheit = (celsius * 9 / 5) + 32
print("Fahrenheit:", fahrenheit)

# Q40
total_seconds = 367
minutes = total_seconds // 60
seconds = total_seconds % 60
print("Minutes:", minutes)
print("Seconds:", seconds)

# Q41
total_seconds = 7384
hours = total_seconds // 3600
remaining_seconds = total_seconds % 3600
minutes = remaining_seconds // 60
seconds = remaining_seconds % 60
print("Hours:", hours)
print("Minutes:", minutes)
print("Seconds:", seconds)

# Q42
basic_salary = 25000
hra = 5000
travel_allowance = 2500
tax_deduction = 3000
gross_salary = basic_salary + hra + travel_allowance
net_salary = gross_salary - tax_deduction
print("Gross Salary:", gross_salary)
print("Net Salary:", net_salary)

# Q43
distance = 120
mileage = 20
fuel_price = 100
fuel_required = distance / mileage
total_fuel_cost = fuel_required * fuel_price
print("Fuel Required:", fuel_required, "litres")
print("Total Fuel Cost:", total_fuel_cost)

# Q44
price = int("2500")
discount_percentage = int("10")
discount_amount = price * discount_percentage / 100
final_price = price - discount_amount
print("Discount Amount:", discount_amount)
print("Final Price:", final_price)



# Topic 5: Type Casting + Arithmetic Operators


# Q45
price = int("1200")
quantity = int("4")
total_price = price * quantity
print("Price:", price)
print("Quantity:", quantity)
print("Total Price:", total_price)

# Q46
python_marks = int("85")
math_marks = int("78")
physics_marks = int("91")
total_marks = python_marks + math_marks + physics_marks
average_marks = total_marks / 3
print("Total Marks:", total_marks)
print("Average Marks:", average_marks)

# Q47
price = int("1500")
quantity = int("2")
tax_rate = int("5")
subtotal = price * quantity
tax_amount = subtotal * tax_rate / 100
final_bill = subtotal + tax_amount
print("Subtotal:", subtotal)
print("Tax Amount:", tax_amount)
print("Final Bill:", final_bill)

# Q48
price = 2000
discount_rate = 15
gst_rate = 18
discount_amount = price * discount_rate / 100
price_after_discount = price - discount_amount
gst_amount = price_after_discount * gst_rate / 100
final_price = price_after_discount + gst_amount
print("Discount Amount:", discount_amount)
print("Price After Discount:", price_after_discount)
print("GST Amount:", gst_amount)
print("Final Price:", final_price)

# Q49
price = int("500")
quantity = 3
total = price * quantity
print("Total:", total)

# Q50
marks1 = int("80")
marks2 = int("75")
marks3 = int("90")
total = marks1 + marks2 + marks3
print("Total Marks:", total)



# Topic 6: Output Prediction and Conceptual Practice


# Q51 output:
# 50
# 50
# <class 'str'>
# <class 'int'>
a = "50"
b = int(a)
print(a)
print(b)
print(type(a))
print(type(b))

# Q52 output: 99.99 then 99.  int() removes the decimal part.
number = 99.99
result = int(number)
print(number)
print(result)

# Q53 output: 17, 7, 60, 2.4, 2, 2
a = 12
b = 5
print(a + b)
print(a - b)
print(a * b)
print(a / b)
print(a // b)
print(a % b)

# Q54 output: 20, 30, 7.0, 2.5
# Parentheses are calculated before the other arithmetic operations.
print(10 + 5 * 2)
print((10 + 5) * 2)
print(20 / 5 + 3)
print(20 / (5 + 3))

# Q55 output: 4, 8, 6
# a is ones, c is tens, and d is hundreds. b is the number without its ones digit.
number = 684
a = number % 10
b = number // 10
c = b % 10
d = number // 100
print(a)
print(c)
print(d)


# Topic 7: Mixed Debugging


# Q56
student_name = "Ravi"
marks = "85"
total = int(marks) + 5
print("Student:", student_name)
print("Marks:", total)
print("Type:", type(total))

# Q57
number = 746
ones = number % 10
tens = (number // 10) % 10
hundreds = number // 100
print("Ones:", ones)
print("Tens:", tens)
print("Hundreds:", hundreds)

# Q58
price = int("2000")
discount = int("15")
discount_amount = price * discount / 100
final_price = price - discount_amount
print("Discount:", discount_amount)
print("Final Price:", final_price)

# Q59
student_name = "Rahul"
marks1 = int("85")
marks2 = int("90")
marks3 = int("78")
total = marks1 + marks2 + marks3
average = total / 3
print("Student:", student_name)
print("Total Marks:", total)
print("Average:", average)
print("Marks Type:", type(total))

# Q60 - Part A: Number Analysis
number = 5836
ones = number % 10
tens = (number // 10) % 10
hundreds = (number // 100) % 10
thousands = number // 1000
digit_sum = thousands + hundreds + tens + ones
reversed_number = ones * 1000 + tens * 100 + hundreds * 10 + thousands
print("Thousands Digit:", thousands)
print("Hundreds Digit:", hundreds)
print("Tens Digit:", tens)
print("Ones Digit:", ones)
print("Sum of Digits:", digit_sum)
print("Reversed Number:", reversed_number)

# Q60 - Part B: Product Billing
price = int("1250")
quantity = int("4")
discount = int("10")
subtotal = price * quantity
discount_amount = subtotal * discount / 100
final_amount = subtotal - discount_amount
print("Subtotal:", subtotal)
print("Discount Amount:", discount_amount)
print("Final Amount:", final_amount)
