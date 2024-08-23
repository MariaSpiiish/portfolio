import { FloatButton } from 'antd'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Main from './components/Main/Main'

function App() {
  return (
    
    <div className='page-container'>
      <Header />
      <Main />
      <Footer />
      <FloatButton.BackTop visibilityHeight={1500}/>
    </div>
  )
}

export default App
