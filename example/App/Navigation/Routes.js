import { Transitions } from '../Themes/'

export default new class Routes {
  get PresentationScreen () {
    return {
      title: 'welcome',
      component: require('../Containers/PresentationScreen').default,
      leftButton: 'HAMBURGER'
    }
  }
}
