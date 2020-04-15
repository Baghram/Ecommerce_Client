<template>
  <div id="Product">
      <h1>Add Product</h1>
      <b-form @submit="onSubmit" @reset="onReset">
          <b-form-group id="input-group-2" label="Name:" label-for="input-2">
                <b-form-input
                id="input-2"
                v-model="form.Name"
                type='text'
                required
                placeholder="Enter Product Name Here"
                ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Image_Url:" label-for="input-2">
                <b-form-input
                id="input-2"
                v-model="form.Image_Url"
                type='text'
                required
                placeholder="Enter Image Url Here"
                ></b-form-input>
          </b-form-group>

            <b-form-group id="input-group-2" label="Stock:" label-for="input-2">
                <b-form-input
                id="input-2"
                v-model="form.Stock"
                type='number'
                required
                placeholder="Enter Stock Here"
                ></b-form-input>
          </b-form-group>

                <b-form-group id="input-group-2" label="Price:" label-for="input-2">
                <b-form-input
                id="input-2"
                v-model="form.Price"
                type='number'
                required
                placeholder="Enter Price Here"
                ></b-form-input>
          </b-form-group>

          <div id="button">
            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="danger">Cancel</b-button>

        </div>
       </b-form>
  </div>
</template>

<script>
export default {
  name: 'AddProduct',
  data () {
    return {
      form: {
        Name: '',
        Image_Url: '',
        Stock: 0,
        Price: 0
      }
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      this.$Progress.start()
      const payload = {
        Name: this.form.Name,
        Image_Url: this.form.Image_Url,
        Price: this.form.Price,
        Stock: this.form.Stock
      }
      this.$store.dispatch('AddProduct', payload)
        .then(result => {
          this.$Progress.finish()
          this.$toasted.show('Add Product Success')
          this.$router.push('/admin/')
        })
        .catch(err => {
          this.$Progress.finish()
          this.$toasted.show('Add Product Failed')
          console.log(err)
        })
    },
    onReset (evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.Name = ''
      this.form.Image_Url = ''
      this.form.Stock = 0
      this.form.Price = 0
      this.$store.dispatch('FetchData')
      this.$router.push('/admin/')
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
#Product{
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
