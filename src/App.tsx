import './App.css'
import { Outlet, Route, Routes } from 'react-router-dom'
import { FloatButton } from 'antd'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Qualifications from './components/Qualifications/Qualifications'

function App() {
  console.log('load')
  function Layout(): JSX.Element {
    return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    )
  }

  return (
    <div className='page-container'>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />}></Route>
          <Route path="/qualifications" element={<Qualifications />}></Route>
        </Route>
      </Routes>
      
      <FloatButton.BackTop visibilityHeight={1500}/>
      
    </div>
  )
}

export default App
