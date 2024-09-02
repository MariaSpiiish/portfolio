import './App.css'
import { Outlet, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import { FloatButton } from 'antd'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Qualifications from './components/Qualifications/Qualifications'
import ImagePopup from './components/ImagePopup/ImagePopup'

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [img, setImg] = useState('');

  console.log('open', isOpen)
  console.log('img', img)

  const close = (): void => {
    setIsOpen(false);
  }

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
          <Route path="/qualifications" element={<Qualifications setImg={setImg} setIsOpen={setIsOpen} />}></Route>
        </Route>
      </Routes>
      
      <FloatButton.BackTop visibilityHeight={1500}/>
      <ImagePopup img={img} onClose={close} isOpen={isOpen}/>
    </div>
  )
}

export default App
