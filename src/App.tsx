import React,{ useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './pages/Home/Home'
import './styles.css'
// import file from './app.js'

export function AddLibrary(urlOfTheLibrary:any) {
  const script = document.createElement('script');
  script.src = urlOfTheLibrary;
  script.async = true;
  document.body.appendChild(script);
}
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Home/>

    {/* {AddLibrary('/')} */}
    </>
  )
}

export default App
