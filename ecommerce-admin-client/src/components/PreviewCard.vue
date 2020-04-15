<template>
  <div id="card">
      <h1>Preview</h1>
      <b-card
    :title="Name"
    :img-src="Image_Url"
    :img-alt="Image_Url"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
        Stock: {{Stock}}<br>
        Price: {{Price}}<br>
    </b-card-text>
    <form>
      <input type="numbers" v-model="Numbers" >
      <b-button class="button"  variant="secondary">Add To Cart</b-button>
    </form>
  </b-card>
  <br>
  <br>
  <div id="button">
  <b-button variant="primary" @click="Back">Go Back</b-button>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Preview',
  data () {
    return {
      Name: '',
      Image_Url: '',
      Stock: 0,
      Price: 0,
      Numbers: 0
    }
  },
  methods: {
    Back () {
      this.$router.push('/admin/')
    }
  },
  created () {
    this.$store.dispatch('FetchDetail', this.$route.params.id)
      .then(result => {
        this.Name = result.data.Name
        this.Image_Url = result.data.Image_Url
        this.Stock = result.data.Stock
        this.Price = result.data.Price
      })
      .catch(err => {
        console.log(err)
      })
  }

}
</script>

<style>
#card{
    margin-top: 10vh;
    margin-left: 40vw;
}
h1{
    margin-left: 4vw;
}
#button{
    margin-left: 0vw;
}
</style>
