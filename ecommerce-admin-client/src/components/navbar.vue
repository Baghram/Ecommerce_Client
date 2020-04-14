<template>
  <Slide :closeOnNavigation="true"  width='150' noOverlay id="Slide">
      <router-link to='/'><b-button>Home</b-button></router-link>
      <router-link to='/product'><b-button>Products</b-button></router-link>
      <router-link to='/register'><b-button>Register</b-button></router-link>
      <router-link to='/login'><b-button>Login</b-button></router-link>
      <router-link to='/'><b-button>Logout</b-button></router-link>
  </Slide>
</template>

<script>
import { Slide } from 'vue-burger-menu'
export default {
  components: {
    Slide
  }
}
</script>

<style>
#Slide{
    display: flex;
    flex-direction: column;
    align-content: space-around;

}
#div1{
    display: flex;
    flex-direction: column;
}
#div2{
    display: flex;
    flex-direction: column;
}
</style>
