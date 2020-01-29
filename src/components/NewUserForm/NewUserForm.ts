import m from 'mithril'
import UserModel from '../../models/UserModel'

interface nameAttrs {
  label: string
  value: string
  error: string
}

export default function() {
  const firstName = {
    label: 'First Name',
    value: '',
    error: ''
  }

  const lastName = {
    label: 'Last Name',
    value: '',
    error: ''
  }

  const validate = () => {
    if (firstName.value.length < 3) {
      firstName.error = 'First Name must be at least 3 characters'
      return
    }
    if (lastName.value.length < 3) {
      lastName.error = 'Last Name must be at least 3 characters'
      return
    }
  }

  const input = (attrs: nameAttrs) =>
    m(
      'div.formInput',
      m(
        'label',
        attrs.label,
        m('input[type=text][placeholder=First Name]', {
          oninput: function(e: any) {
            attrs.value = e.target.value
            attrs.error && validate()
          }
        })
      )
    )

  return {
    view: function() {
      return m(
        'new-user-form',
        {
          onsubmit: function(e: any) {
            e.preventDefault()
            // validate
            UserModel.createUser({
              firstName: firstName.value,
              lastName: lastName.value
            })
            m.route.set('/list')
          }
        },
        [
          m('h2', 'NEW USER FORM PAGE'),
          m('form', [
            input(firstName),
            input(lastName),
            m('button.button[type=submit]', 'Save')
          ])
        ]
      )
    }
  }
}
