import axios from 'axios'

export default {

  register: function(name, email, password) {
    return axios.post('/api/users/register', { name, email, password })
  },

  login: function(email, password) {
    return axios.post('/api/auth/authenticate', { email, password })
  },

  search: function(term, location, offset, sort_by) {
    return axios.get(`/api/search/${term}/${location}/${offset}/${sort_by}`)
  },

  getReviews: function(url) {
    let params = { 
      url 
    }
    return axios.get(`/api/search/reviews`, { params })
  },

  filterPrice: function(term, location, offset, sort_by, price) {
    return axios.get(`/api/search/filterPrice/${term}/${location}/${offset}/${sort_by}/${price}`)
  },

  filterCategory: function(term, location, offset, sort_by, category) {
    return axios.get(`/api/search/filterCat/${term}/${location}/${offset}/${sort_by}/${category}`)
  }
}