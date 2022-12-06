import numpy as np

array = np.loadtxt("test.csv", dtype=str, delimiter=",") 

array_url = []
marker = "N/A"
proceed = "No"

url = input()

for i in array:
    if i[0] == url:
        marker = i[1]
        
if marker != "N/A":
    proceed = input(f"You tried to go to {url}, and this website is noted as {marker}, do you want to proceed? \nYes / No ... ")
else:
    print("This link is safe, continue ...")

if proceed == "Y" or proceed == "y" or proceed == "Yes" or proceed == "YES":
    print(f"Connecting to {url} ...")
else:
    print(f"Going back to safety ...")