import m from 'mithril'
import UserModel from '../../models/UserModel'

export default {
  oninit: UserModel.loadList,
  view: () => {
    return m(".user-list", UserModel.list.map((user) => {
      return m(".user-list-item", user.firstName + ' ' + user.lastName)
    }))
  }
} as m.Component