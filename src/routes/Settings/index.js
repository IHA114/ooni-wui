import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'settings',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Settings = require('./containers/SettingsContainer').default
      const { settingsReducer } = require('./reducers/settings')

      injectReducer(store, {
        key: 'settings',
        reducer: settingsReducer
      })

      cb(null, Settings)
    }, 'settings')
  }
})
