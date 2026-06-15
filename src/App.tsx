import { AppProviders } from './components/providers/AppProviders'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'

export default function App() {
  return (
    <AppProviders>
      <RouterProvider router={router} />
    </AppProviders>
  )
}
