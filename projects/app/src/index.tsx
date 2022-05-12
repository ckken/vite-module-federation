import {createRoot} from 'react-dom/client'
import App from './App'
const rootElement: any = document.getElementById('root')
const root = createRoot(rootElement)

root.render(<App />)
