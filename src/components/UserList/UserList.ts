import m from 'mithril'
import UserModel from '../../models/UserModel'

export default {
  oninit: UserModel.loadList,
  view: function() {
    return m(
      '.user-list',
      UserModel.list.map(user => {
        return m(
          m.route.Link,
          {
            class: 'user-list-item',
            href: '/edit/' + user.id
          },
          user.firstName + ' ' + user.lastName
        )
      })
    )
  }
}
