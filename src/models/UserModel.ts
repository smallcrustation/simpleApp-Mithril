import m from 'mithril'

interface User {
  id: number
  firstName: string
  lastName: string
}

const UserModel = {
  list: <User[]>[], //as User[],
  loadList: async () => {
    try {
      const res: { data: User[] } = await m.request({
        method: 'GET',
        url: 'https://rem-rest-api.herokuapp.com/api/users',
        withCredentials: true // allows cookies
      }) // mithril auto converts res body to json
      return (this.list = res.data)
    } catch (err) {
      return console.error(err.message)
    }
  }
}


export default UserModel
