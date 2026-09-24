# # Topic 11 — Integrated Problems

#Q60

# name = input()
# mark1, mark2, mark3 = input().split()
# total = int(mark1) + int(mark2) + int(mark3)
# average = total / 3
# print(f"Name: {name}\nTotal: {total}\nAverage: {average:.2f}")


#Q61

# student_id = input()
# degree, batch, branch, roll_number = student_id.split("-")
# last_three = student_id[-3:]
# roll_number = int(roll_number)
# print(f"Degree: {degree}")
# print(f"Batch: {batch}")
# print(f"Branch: {branch}")
# print(f"Roll Number: {roll_number}")


#Q62

# first_name, middle_name, last_name = input().split()
# username = first_name.lower() + "." + last_name.lower()
# print(username)


#Q63
# sentence = input()
# words = sentence.split()
# print(f"First word: {words[0]}")
# print(f"Last word: {words[-1]}")
# print(f"Number of words: {len(words)}")


#Q64
# email = input()
# username, domain = email.split("@")
# print(f"@ Present: {'@' in email}")
# print(f"Username: {username}")
# print(f"Domain: {domain}")


#Q65
# character = input()
# code = ord(character)
# print(f"Character: {character}")
# print(f"Code: {code}")
# print(f"Previous: {chr(code - 1)}")
# print(f"Next: {chr(code + 1)}")


#Q66
# product = input()
# price = float(input())
# quantity = int(input())
# discount_percentage = float(input())
# subtotal = price * quantity
# discount = subtotal * discount_percentage / 100
# final_total = subtotal - discount
# print(f"Product: {product}")
# print(f"Price: {price:.2f}")
# print(f"Quantity: {quantity}")
# print(f"Subtotal: {subtotal:.2f}")
# print(f"Discount: {discount:.2f}")
# print(f"Final Total: {final_total:.2f}")


#Q67
# date = input()
# day, month, year = date.split("-")
# print(f"Day: {day}")
# print(f"Month: {month}")
# print(f"Year: {year}")


#Q68

# first_word, second_word = input().split()
# print(f"First Word: {first_word}")
# print(f"Second Word: {second_word}")
# print(f"First Word Reversed: {first_word[::-1]}")
# print(f"Second Word Reversed: {second_word[::-1]}")


# Q69

# student_code = input()
# degree, batch, branch, roll = student_code.split("-")
# print(f"Degree: {degree}")
# print(f"Batch: {batch}")
# print(f"Branch: {branch}")
# print(f"Roll: {roll}")
# print(f"Code: {degree}/{branch}/{roll}")


# Q70

# full_name = input()
# first_name, middle_name, last_name = full_name.split()
# print(f"Original: {full_name}")
# print(f"First Name: {first_name}")
# print(f"Last Name: {last_name}")
# print(f"First Name (Upper Part): {first_name[:3].upper()}")
# print(f"Last Name (Lower Part): {last_name[1:4].lower()}")
# print(f"Full Name Reversed: {full_name[::-1]}")

