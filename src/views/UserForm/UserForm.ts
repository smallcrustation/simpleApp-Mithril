import m from 'mithril'

export default{
  view: function(){
    return m('.user-form', [
      m('h2', 'USER FORM PAGE'),
      m('form', [
        m('div.first-name', [
          m('label', 'First Name'),
          m('input[type=text][placeholder=First Name]'),
        ]),
        m('div.last-name', [
          m('label', 'Last Name'),
          m('input[type=text][placeholder=Last Name]'),
        ]),
        m('button.button[type=button]','Save')
      ])
    ])
  }
}