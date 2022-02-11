<template>
  <div>
    <h1>Login</h1>
    <button @click="goTo">跳转</button>
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
        console.log('mounted.....')
    },
    created() {
        console.log('created.....')
    },
    methods: {
        goTo() {
            this.$router.push('login')
        }
    },
}
</script>