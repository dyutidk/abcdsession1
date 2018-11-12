def palindrome(x):
    g=x
    rev=0
    while(x!=0):
        s=x%10
        rev=rev*10+s
        x=x//10
    if(g==rev):
        return "palindrome"
    else:
        return "not a palindrome"


n=int(input("Enter a number : "))
result=palindrome(n)
print(result)





