import { createRoot } from 'react-dom/client'

import { App } from '@/App'

const entry = document.getElementById('root')

const root = createRoot(entry!)

root.render(<App />)
