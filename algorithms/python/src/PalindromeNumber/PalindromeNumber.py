class Solution:
    def isPalindrome(self, x: int) -> bool:
        text = str(x)
        rev = text[::-1]
        
        return rev == text