class Solution {
    public int missingNumber(int[] nums) {
        int n = nums.length;

        int val1 = n*(n+1)/2;
       
        int val2 = 0;
        for(int i =0;i<nums.length;i++){
            val2 += nums[i];
        }
        

        return (val1 - val2);
}
}
