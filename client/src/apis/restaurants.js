import { apiHelper } from './../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  getRestaurants (page, filter) {
    let queryString = page ? `?page=${page}` : ''
    if (filter && filter.length > 1) {
      queryString += filter.join('&')
    }
    return apiHelper.get(`/restaurants${queryString}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  getUsersRestaurants (page, filter) {
    let queryString = page ? `?page=${page}` : ''
    if (filter && filter.length > 1) {
      queryString += filter.join('&')
    }
    return apiHelper.get(`/user/restaurants${queryString}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  getRestaurant (id) {
    return apiHelper.get(`/restaurants/${id}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  getUsersRestaurant (id) {
    return apiHelper.get(`/user/restaurants/${id}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  getCategories () {
    return apiHelper.get('/categories')
  },
  getDistricts () {
    return apiHelper.get('/districts')
  },
  getPrices () {
    return apiHelper.get('/prices')
  },
  getNearByRestaurants (page, filter) {
    let queryString = page ? `?page=${page}` : ''
    if (filter && filter.length > 1) {
      queryString += filter.join('&')
    }
    return apiHelper.get(`/nearby${queryString}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  getUserNearByRestaurants (page, filter) {
    let queryString = page ? `?page=${page}` : ''
    if (filter && filter.length > 1) {
      queryString += filter.join('&')
    }
    return apiHelper.get(`/users/nearby${queryString}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  }
}
