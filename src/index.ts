import m from 'mithril'
import UserList from './views/UserList/UserList'
import './index.scss'

m.mount(document.body, {
  view: function() {
    return m(UserList)
  }
})
