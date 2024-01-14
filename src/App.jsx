import { useState } from 'react'
import './App.css'
import AppHeader from './components/AppHeader'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);

function App() {

  return (
    <>

    <RouterProvider />
      {/* <div className="ma-container">
        
        <AppHeader />

        <main className='a'>
          
        </main>

      </div> */}
    </>
  )
}

export default App
