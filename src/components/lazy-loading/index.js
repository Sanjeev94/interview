import React, { Suspense } from 'react'
// import Home from './Home'
// import Lorem from './Lorem'

// import Loader from './Loader'
const Lorem = React.lazy(() => import("./Lorem"));
const Home = React.lazy(() => import("./Home"));

const LazyLoadinng = () => {
  return (
    <div>
        <Suspense fallback={
        <div>
            <h1>Loading please wait...</h1></div>}>
        <Home /><Home />
        <Home /><Home />
        <Home /><Home />

        <Lorem />
        </Suspense>
    </div>
    

  )
}

export default LazyLoadinng