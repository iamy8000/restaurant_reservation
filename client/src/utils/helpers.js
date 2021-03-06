import axios from 'axios'
import Swal from 'sweetalert2'
// const baseURL = 'https://mealfinder2021.herokuapp.com/api'
const baseURL = 'http://localhost:3000/api'

export const apiHelper = axios.create({
  baseURL,
  withCredentials: true
})

export const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
})
