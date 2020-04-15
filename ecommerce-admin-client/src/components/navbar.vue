<template>
  <Slide :closeOnNavigation="true"  width='150' noOverlay id="Slide">
    <div>
      <router-link to='/'><b-button>Home</b-button></router-link>
    </div>
    <div>
      <router-link to='/admin'><b-button v-if="IsAdmin">Admin</b-button></router-link>
    </div>
    <div>
      <router-link to='/login'><b-button v-if="!IsLogin">Login</b-button></router-link>
    </div>
    <div>
      <b-button @click.prevent="Logout" v-if="IsLogin">Logout</b-button>
    </div>
  </Slide>
</template>

<script>
import { Slide } from 'vue-burger-menu'
export default {
  data () {
    return {
    }
  },
  components: {
    Slide
  },
  methods: {
    Logout () {
      this.$router.push('/')
      this.$toasted.show('Successfully Log Out,See You Next Time')
      this.$store.dispatch('Logout')
    }
  },
  computed: {
    IsLogin () {
      return this.$store.state.IsLogin
    },
    IsAdmin () {
      return this.$store.state.IsAdmin
    }
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
    height: 10vh;
    flex-direction: column;
    align-content: space-between;
}
#div2{
    display: flex;
    flex-direction: column;
}
</style>
