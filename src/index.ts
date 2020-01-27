import m from 'mithril'
import UserList from './views/UserList/UserList'
import UserForm from './views/UserForm/UserForm'
import './index.scss'

//m.route.prefix = '' // default uses hashbang #!
m.route(document.body, '/list', {
  '/list': UserList,
  '/edit/:id': UserForm,
  // '/:404...': {view: function(){return m('h1', '404')}}
})
