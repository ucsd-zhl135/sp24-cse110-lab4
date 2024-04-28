Part 2.
1. It will print prices.length (3), since i is a var, and the loop terminates after i = prices.length.
2. It will print 150, since that's the last discountedPrice from the loop.
3. It will print 150 as well, since that's the last finalPrice from the loop.
4. It returns a list [ 50, 100, 150 ], as that's the prices after applying a 50% discount.
5. It will cause an error, as i is not defined outside of the loop.
6. It will cause an error, as discountedPrice is not defined outside of the loop.
7. It will print 150, as finalPrice is defined in this scope.
8. Same as 4.
9. It will cause an error, as i is not defined outside of the loop.
10. It will print 3, because that's the length of the prices.
11. It returns a list [ 50, 100, 150 ], as that's the prices after applying a 50% discount.
12.
A student['name']
B student['Grad Year']
C student['greeting']()
D student['Favorite Teacher']['name']
E student['courseLoad'][0]
13. 
A '32', 2 is converted to a string
B 1, '3' is converted to an number
C 3, null is converted to 0
D '3null' null is converted to 'null'
E 4, true is converted to 1
F 0, false and null are converted to 0
G '3undefined', undefined is converted to 'undefined'
H NaN, '3' is converted to 3, which becomes NaN undefined is subtracted from it
14. 
A true, 2 is converted to integer
B false, they are compared as strings
C true, one is converted to the other type
D false, strict equality means different types are always unequal
E false, true converted to 1, so unequal
F true, Boolean(2) is equal to true
15. === is strict equality, which == is loose equality. The latter will do type conversions when comparing, which the former wont (and will return false if the types are different).
16. 
17. It will return [2,4,6], because it runs the callback on each element of the array, and that callback multiplies the number by 2. 
18. 
19. 
1
4
3
2

