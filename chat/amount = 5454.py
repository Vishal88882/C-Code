amount = 5454
# 2000, 500, 200, 100, 50, 20, 10, 5, 2, ,1

notes_2000 = amount//2000
amount = amount%2000

notes_500 = amount//500
amount = amount%500

notes_200 = amount//200
amount = amount%200

notes_100 = amount//100
amount = amount%100

notes_50 = amount//50
amount = amount%50

notes_20 = amount//20
amount = amount%20

notes_10 = amount//10
amount = amount%10

notes_5 = amount//5
amount = amount%5

notes_2 = amount//2
amount = amount%2

notes_1 = amount//1
amount = amount%1


print(f"""

    2000: {notes_2000}
    0500: {notes_500}
    0200: {notes_200}
    0100: {notes_100}
    0050: {notes_50}
    0020: {notes_20}
    0010: {notes_10}
    0005: {notes_5}
    0002: {notes_2}
    0001: {notes_1} 
    
    """)