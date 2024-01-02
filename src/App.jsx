
import './App.css'
import Breadcrumb from './components/BreadCrumb'
import GridComponent from './components/GridComponent'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <Navbar/>
      <Breadcrumb/>
      <div className='bg-gray-200'>
      <GridComponent/>
      </div>
    </>
  )
}

export default App
