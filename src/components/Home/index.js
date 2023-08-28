import React from 'react'
import Sidebar from './Sidebar'
import Gallery from './Gallery'

function Home() {
    return (
    <section className="pt-5 pb-5">
        <div className="container">
          <div className="row">
            <Sidebar />
            <Gallery />
         </div>
        </div>
      </section>
    );
  }
  export default Home
