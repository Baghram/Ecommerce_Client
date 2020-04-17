import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    IsLogin: false,
    IsAdmin: false,
    Products: [],
    Cart: [],
    Orders: []
  },
  mutations: {
    SET_LOGIN (state, payload) {
      state.IsLogin = payload
    },
    SET_ADMIN (state, payload) {
      state.IsAdmin = payload
    },
    SET_PRODUCTS (state, payload) {
      state.Products = payload
    }
  },
  actions: {
    Login (context, payload) {
      console.log(payload)
      return axios({
        url: 'https://frozen-meadow-20864.herokuapp.com/user/login',
        method: 'POST',
        data: {
          Email: payload.Email,
          Password: payload.Password
        }
      })
    },
    Register (context, payload) {
      return axios({
        url: 'https://frozen-meadow-20864.herokuapp.com/user/register',
        method: 'POST',
        data: {
          Email: payload.email,
          Password: payload.password
        }
      })
    },
    FetchData ({ commit }) {
      axios({
        url: 'https://frozen-meadow-20864.herokuapp.com/product/',
        method: 'GET',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(result => {
          commit('SET_PRODUCTS', result.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    AddProduct (context, payload) {
      return axios({
        url: 'https://frozen-meadow-20864.herokuapp.com/product/',
        method: 'POST',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          Name: payload.Name,
          Image_Url: payload.Image_Url,
          Price: payload.Price,
          Stock: payload.Stock
        }
      })
    },
    UpdateProduct (context, payload) {
      return axios({
        url: `https://frozen-meadow-20864.herokuapp.com/product/${payload.id}`,
        method: 'PATCH',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          Name: payload.Name,
          Image_Url: payload.Image_Url,
          Stock: payload.Stock,
          Price: payload.Price
        }
      })
    },
    DeleteProduct (context, payload) {
      return axios({
        url: `https://frozen-meadow-20864.herokuapp.com/product/${payload}`,
        method: 'DELETE',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
    },
    FetchDetail (context, payload) {
      return axios({
        url: `https://frozen-meadow-20864.herokuapp.com/product/${payload}`,
        method: 'GET',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
    },
    Logout ({ commit }) {
      commit('SET_LOGIN', false)
      commit('SET_ADMIN', false)
      localStorage.removeItem('access_token')
      localStorage.removeItem('Role')
    }
  },
  modules: {
  }
})
