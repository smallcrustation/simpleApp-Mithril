import m from 'mithril'
import Layout from './components/Layout/Layout'
import UserList from './components/UserList/UserList'
import UserForm from './components/UserForm/UserForm'
import NewUserForm from './components/NewUserForm/NewUserForm'
import './index.scss'

//m.route.prefix = '' // default uses hashbang #!
m.route(document.body, '/list', {
  '/list': {
      render: function(){
        return m(Layout, m(UserList))
      }
  },
  '/edit/:id': {
    render: function(vnode){
      return m(Layout, m(UserForm, vnode.attrs))
    }
  },
  '/createuser': {
    render: function(){
      return m(Layout, m(NewUserForm))
    }
  }
  // '/:404...': {view: function(){return m('h1', '404')}}
})
