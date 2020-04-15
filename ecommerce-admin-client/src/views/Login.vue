<template>
  <div id="Login">
      <h1>Login</h1>
       <b-form @submit="onSubmit" @reset="onReset">
           <b-form-group
                id="input-group-1"
                label="Email address:"
                label-for="input-1"
                description="We'll never share your email with anyone else."
            >
                <b-form-input
                id="input-1"
                v-model="form.email"
                type="email"
                required
                placeholder="Enter email"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Password:" label-for="input-2">
                <b-form-input
                id="input-2"
                v-model="form.password"
                type='password'
                required
                placeholder="Enter Password"
                ></b-form-input>
      </b-form-group>
        <div id="button">
            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>

        </div>
       </b-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      this.$Progress.start()
      const payload = {
        Email: this.form.email,
        Password: this.form.password
      }
      this.$store.dispatch('Login', payload)
        .then(result => {
          this.$Progress.finish()
          if (result.data.Role === 'Admin') {
            this.$store.commit('SET_ADMIN', true)
            this.$toasted.show(`Login Success...Welcome ${result.data.Email}`)
            localStorage.setItem('access_token', result.data.access_token)
            localStorage.setItem('Role', result.data.Role)
            this.$store.commit('SET_LOGIN', true)
          } else {
            this.$toasted.show('Sorry...This is Admin Privilege Only!')
            this.$store.dispatch('Logout')
          }
          this.form.email = ''
          this.form.password = ''
          this.$router.push('/')
        })
        .catch(err => {
          this.$Progress.finish()
          this.form.email = ''
          this.form.password = ''
          this.$toasted.show('Wrong Email / Password')
          console.log(err)
        })
    },
    onReset (evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.password = ''
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}

</script>

<style>
#Login{
    border: black;
    border-style: double;
    border-width: 10px;
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 40px;
    padding-bottom: 40px;
    background-color: white;
    width: 40vw;
    text-align: center;
    margin-left: 30vw;
    margin-top: 10vh;
}
#button{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 300px;
    margin-left: 170px;
}

</style>
