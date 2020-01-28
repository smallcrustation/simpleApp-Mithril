import m from 'mithril'

interface User {
  id: number
  firstName: string
  lastName: string
}

const UserModel = {
  list: [] as User[], // <User[]>[]

  async loadList(){
    try {
      const res: { data: User[] } = await m.request({
        method: 'GET',
        url: 'https://rem-rest-api.herokuapp.com/api/users',
        withCredentials: true // allows cookies
      }) // mithril auto converts res body to json
      return UserModel.list = res.data 
    } catch (err) {
      return console.error(err.message)
    }
  },

  selectedUser: {} as User,

  async getUserById(id: string){
    try{
      const res: User = await m.request({
        method: 'GET',
        url: `https://rem-rest-api.herokuapp.com/api/users/${id}`,
        withCredentials: true
      })
      return UserModel.selectedUser = res
    } catch(err){
      console.error(err.message)
    }
  },

  save: function(){
    return m.request({
      method: 'PUT',
      url: `https://rem-rest-api.herokuapp.com/api/users/${UserModel.selectedUser.id}`,
      body: UserModel.selectedUser,
      withCredentials: true
    })
  }
}

export default UserModel