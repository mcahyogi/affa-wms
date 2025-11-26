import axios from '../axios'


export const userApi = {
getUsers() {
return axios.get('/users')
},
getUser(id) {
return axios.get(`/users/${id}`)
},
createUser(payload) {
return axios.post('/users', payload)
},
updateUser(id, payload) {
return axios.put(`/users/${id}`, payload)
},
deleteUser(id) {
return axios.delete(`/users/${id}`)
}
}