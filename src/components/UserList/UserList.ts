import m from 'mithril'
import UserModel from '../../models/UserModel'

export default {
  oninit: UserModel.loadList,
  view: function() {
    let loading: boolean|void = false // need type void bc of promise
    
    // load users until page filled
    const userListDom = document.querySelector('.user-list')
    if (userListDom) {
      // if the .user-list box bottom is less than the window inner height (-10 so it dsnt run while doing infinite scroll)
      if(userListDom.getBoundingClientRect().bottom < window.innerHeight-10){
        console.log('fitting page')
        UserModel.loadList(1)
      }
    }

    // setup listener to detect bottom of page scroll
    window.onscroll = async function(ev: Event) {
      if (!loading && window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
        loading = true
        loading = await UserModel.loadList(5) // return false
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
