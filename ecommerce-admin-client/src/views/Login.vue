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
                v-model="form.name"
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
      alert(JSON.stringify(this.form))
    },
    onReset (evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.name = ''
      this.form.food = null
      this.form.checked = []
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
