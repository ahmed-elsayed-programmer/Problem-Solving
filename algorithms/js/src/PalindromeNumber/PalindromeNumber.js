var isPalindrome = function(x) {
  let text = x.toString();
  let reverse = text.split("").reverse().join('');
  return text === reverse ;
};