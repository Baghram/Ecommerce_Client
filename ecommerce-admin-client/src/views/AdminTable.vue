<template>
  <div id='admintable'>
      <h1>Products</h1>
      <br>
      <div id="createbutton">
      <button variant="info" @click="Add">Add Product</button>
      </div>
      <table style="width:50%">
  <tr>
    <th>Name</th>
    <th>Image_Url</th>
    <th>Stock</th>
    <th>Price</th>
    <th colspan="3">Options</th>
  </tr>
  <tr v-for="Product in Products" :key="Product.id">
    <td>{{Product.Name}}</td>
    <td>{{Product.Image_Url}}</td>
    <td>{{Product.Stock}}</td>
    <td>{{Product.Price}}</td>
    <td><b-button variant="primary" @click="UpdateProduct(Product.id)">Update</b-button></td>
    <td><b-button variant="danger" @click="DeleteProduct(Product.id)">Delete</b-button></td>
    <td><b-button variant="secondary" @click="Preview(Product.id)">Preview</b-button></td>
  </tr>
</table>
<router-view/>
  </div>
</template>

<script>
export default {
  name: 'Admin-Dashboard',
  computed: {
    Products () {
      return this.$store.state.Products
    }
  },
  methods: {
    Add () {
      this.$router.push('/admin/add')
    },
    UpdateProduct (value) {
      console.log(value)
      this.$router.push(`/admin/${value}`)
    },
    DeleteProduct (value) {
      console.log(value)
      this.$Progress.start()
      this.$store.dispatch('DeleteProduct', value)
        .then(result => {
          this.$Progress.finish()
          this.$toasted.show('Delete Success')
          this.$store.dispatch('FetchData')
        })
        .catch(err => {
          this.$Progress.finish()
          this.$toasted.show('Delete Failed')
          console.log(err)
        })
    },
    Preview (value) {
      this.$router.push(`/admin/preview/${value}`)
    }
  },
  created () {
    this.$store.dispatch('FetchData')
  }

}
</script>

<style>
#admintable{
    text-align: center;
    justify-content: center;
    margin-top: 10vh;
    overflow: auto;
}
table{
    border: black;
    border-style: double;
    border-width: 10px;
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 40px;
    padding-bottom: 40px;
    background-color: rgb(114, 114, 114);
    width: 40vw;
    text-align: center;
    margin-left: 25vw;
    margin-top: 5vh;
}
th{
    border: black;
    border-style: double;
    border-width: 10px;
}
td{
    border: black;
    border-style: double;
    border-width: 10px;
}
tr{
    border: black;
    border-style: double;
    border-width: 10px;
}
#createbutton{
    margin-left: 4vw;
}
</style>
