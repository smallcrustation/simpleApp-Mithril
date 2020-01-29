import m from 'mithril'

interface User {
  id?: number
  firstName: string
  lastName: string
}

const UserModel = {
  // ############### USER LIST ###############
  list: [] as User[], // <User[]>[]

  async loadList(addToLimit: number | object = 0) {
    console.log('loadList()')
    let limit = UserModel.list.length < 5 ? 5 : UserModel.list.length
    // bc oninit: sends an object as a param, set it to default limit
    if(typeof addToLimit == "object") addToLimit = 0

    limit += addToLimit
    console.log(limit)
    try {
      const res: { data: User[] } = await m.request({
        method: 'GET',
        url: `https://rem-rest-api.herokuapp.com/api/users?limit=${limit}`,
        withCredentials: true // allows cookies
      }) // mithril auto converts res body to json
      return (UserModel.list = res.data)
    } catch (err) {
      return console.error(err.message)
    }
  },

  // ############### SELECT USER ###############
  selectedUser: {} as User,

  async getUserById(id: string) {
    try {
      const res: User = await m.request({
        method: 'GET',
        url: `https://rem-rest-api.herokuapp.com/api/users/${id}`,
        withCredentials: true
      })
      return (UserModel.selectedUser = res)
    } catch (err) {
      console.error(err.message)
    }
  },

  // ############### UPDATE USER ###############
  updateUserById: async function() {
    try {
      await m.request({
        method: 'PUT',
        url: `https://rem-rest-api.herokuapp.com/api/users/${UserModel.selectedUser.id}`,
        body: UserModel.selectedUser,
        withCredentials: true
      })
      UserModel.loadList()
    } catch (err) {
      console.error(err.message)
    }
  },

  // ############### CREATE NEW USER ###############
  createUser: async function(newUser: User) {
    console.log(newUser)
    try {
      await m.request({
        method: 'POST',
        url: `https://rem-rest-api.herokuapp.com/api/users`,
        body: newUser,
        withCredentials: true
      })
      UserModel.loadList()
    } catch (err) {}
  }
}

export default UserModel
