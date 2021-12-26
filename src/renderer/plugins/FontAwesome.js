import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import FontAwesomeIcon from '@/renderer/plugins/FontAwesome.vue'

library.add(fas, fab)

export { FontAwesomeIcon }