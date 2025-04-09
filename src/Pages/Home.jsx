import React from 'react'
import Banner from '../Components/Banner'
import LatestCollection from '../Components/LatestCollection'
import BestSellers from '../Components/BestSellers'

const Home = () => {
  return (
    <div>
      <Banner/>
      <LatestCollection/>
      <BestSellers/>
    </div>
  )
}

export default Home