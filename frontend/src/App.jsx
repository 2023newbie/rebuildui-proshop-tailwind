import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import store from './store/store'
import { Provider } from 'react-redux'

function App() {
  const currentYear = new Date().getFullYear()

  return (
    <Provider store={store}>
      <Header />
      <main className='container mx-auto py-4 px-4 md:px-0 lg:px-16'>
        <Outlet />
      </main>
      <div className='text-center p-12 text-gray-600'>
        ProShop &copy; {currentYear}
      </div>
    </Provider>
  )
}

export default App
