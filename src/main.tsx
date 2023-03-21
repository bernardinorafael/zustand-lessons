import { QueryClientProvider } from '@tanstack/react-query'
import ReactDOM from 'react-dom/client'

import { App } from './App'
import { queryClient } from './services/react-query'

const container = ReactDOM.createRoot
const root = document.getElementById('root')

container(root as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>,
)
