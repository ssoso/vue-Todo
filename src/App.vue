<template>
  <div id="app">
    <!-- <router-link to="/home">Home 이동</router-link>
    <router-link to="/login">login 이동</router-link> -->
    <router-view></router-view>
    
  </div>
</template>

<script>

import Login from './components/Login.vue'
import Home from './components/Home.vue'


export default {

  components: {
    Home,
    Login,
  }
  
}
</script>

<style>
  body{
    text-align:  center;
    background-color: #F6F6F8;
  }

  input{
    border-style: groove;
    width: 200px;
  }

  button{
    border-style: groove;
  }
  .shadow{
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.3)
  }

</style>
