// problem 1
let string = prompt("Please enter a string to be displayed in reverse: ")
function reverse(str) {
  let reverseStr = ''
  for(let i=str.length-1;i>=0;i--) {
    reverseStr+=str[i]
  }
  return reverseStr
}
let reversedString = reverse(string)
document.querySelector('#reversedStringDisplay').innerText="The reversed string is: "+reversedString
// problem 2
let numbers = prompt('Enter a series of numbers')
function palindrome(number) {
  let lastNum = number%10
  let newNum = number
  let reversedNum = ""
  while(newNum!=0) {
    reversedNum+=lastNum
    newNum = Math.floor(newNum/10)
    lastNum=newNum%10
  }
  if(reversedNum==number) {
    return true
  } else {
    return false
  }
}
if(palindrome(numbers)) {
  document.querySelector('#isPalindrome').innerText=numbers+" is a palindrome"
} else {
  document.querySelector('#isPalindrome').innerText=numbers+" is NOT a palindrome"
}
// problem 3
let subtotal = Number(prompt('Enter bill subtotal: '))
let tipPercentage = Number(prompt('Enter tip percentage: '))
function totalCalculator(subtotal, tipPercentage) {
  let tip = subtotal*(tipPercentage/100)
  return subtotal+tip
}
document.querySelector('#bill').innerText="The total bill is: $"+totalCalculator(subtotal,tipPercentage)

