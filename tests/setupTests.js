import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

// Fail tests on any console error
console.error = message => {
  throw new Error(message)
}
