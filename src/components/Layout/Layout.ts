import m from 'mithril'

export default {
  view: function(vnode: any){
    return m("main.layout", [
      m('nav.nav', [
        m(m.route.Link, {href: '/list'}, 'Users'),
        m(m.route.Link, {href: '/createuser'}, 'New User')
      ]),
      m('section', vnode.children)
    ])
  }
}