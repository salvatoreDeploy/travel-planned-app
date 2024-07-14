import { CreateTripPage } from './pages/create-trip'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { TripDetailsPage } from './pages/trip-details'

const router = createBrowserRouter([
  {
    path: '/',
    element: <CreateTripPage />,
  },
  {
    path: '/trip/:tripId/details',
    element: <TripDetailsPage />,
  },
])

export function App() {
  return <RouterProvider router={router} />
}
