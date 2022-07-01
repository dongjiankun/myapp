<template>
  <div>
    <h1>Login</h1>
    <button @click="goTo">登录主页</button>
  </div>
</template>
<script>
export default {
    name: 'Login',
    data() {
        return {
           msg: '' 
        }
    },
    mounted() {
       
       console.log(this.threeSumClosest([-1,2,1,-4],1))
    },
    created() {
        
    },
    methods: {
        goTo() {
            this.$router.push('Home')
        },
        /**
 * @param {number[]} nums
 * @return {number[][]}
 */
threeSumClosest(nums, target) {

nums = nums.sort((a,b)=> a-b)
  function compare(a,b){
    if(Math.abs(a-target)>=Math.abs(b-target)){
      return b
    }else{
      return a
    }
  }
  let len =nums.length
  let result = nums[0]+nums[1]+nums[len-1]
  for(let i =0;i<len;i++){
    let left=i+1
    let right =len-1
    while(left <right){
      let sum = nums[i]+nums[left]+nums[right]
      if(sum===target){
        return sum
      }
      while((nums[i]+nums[left]+nums[right])>=target && right>left){
        result = compare(nums[i]+nums[left]+nums[right],result)
        right--
      }
      result = compare(nums[i]+nums[left]+nums[right],result)
      while((nums[i]+nums[left]+nums[right])<target&&right>left){
        result = compare(nums[i]+nums[left]+nums[right],result)
        left++
      }
      result = compare(nums[i]+nums[left]+nums[right],result) 
    }
  }
  return result
}

    },
}

</script>