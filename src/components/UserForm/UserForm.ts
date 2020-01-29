import m, { Vnode } from 'mithril'
import UserModel from '~models/UserModel'
import { userInfo } from 'os'

interface VnodeId extends Vnode {
  attrs: {
    id: string
  }
}

export default {
  oninit: function(vnode: VnodeId) {
    UserModel.getUserById(vnode.attrs.id)
  },
  view: function() {
    return m('.user-form', {
      onsubmit: function(e: any){
        e.preventDefault()
        UserModel.updateUserById()
        m.route.set('/list')
      }
    },[
      m('h2', 'UPDATE USER FORM PAGE'),
      m('form', [
        m('div.first-name', [
          m('label', 'First Name'),
          m('input[type=text][placeholder=First Name]', {
            oninput: function(e: any) {
              UserModel.selectedUser.firstName = e.target.value
            },
            value: UserModel.selectedUser.firstName
          })
        ]),
        m('div.last-name', [
          m('label', 'Last Name'),
          m('input[type=text][placeholder=Last Name]', {
            oninput: function(e: any) {
              UserModel.selectedUser.lastName = e.target.value
            },
            value: UserModel.selectedUser.lastName
          })
        ]),
        m('button.button[type=submit]', 'Save')
      ])
    ])
  }
}
