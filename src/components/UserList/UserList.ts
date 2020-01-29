import m from 'mithril'
import UserModel from '../../models/UserModel'

export default {
  oninit: UserModel.loadList,
  view: function() {

    // setup listener to detect bottom of page scroll
    window.onscroll = function(ev: Event){
      if((window.innerHeight + window.pageYOffset) >= this.document.body.offsetHeight){
        console.log('btm')
        
        // bottom of page load 5 more
        console.log(UserModel.list.length)
        UserModel.loadList(5)
        console.log(UserModel.list.length)
      }
    }

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
