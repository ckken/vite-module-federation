// import Host from 'host/App'
import {Suspense, lazy} from 'react'
const Host = lazy(() => import('host/App'))
const App = () => (
  <>
    <Host />
    <h1>Module Federation React 18 App</h1>
  </>
)
export default App
