import riot from 'riot'
import './tags/app.tag'

const initialData = {
  heading: 'Hello World!'
}

riot.mount('#root', 'app', initialData)
