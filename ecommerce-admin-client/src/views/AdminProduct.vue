<template>
  <div>
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
    }
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
</style>
