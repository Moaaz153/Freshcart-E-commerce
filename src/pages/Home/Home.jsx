import React from 'react'
import HomeSlider from '../../components/HomeSlider/HomeSlider'
import HomeFeatures from '../../components/HomeFeatures/HomeFeatures'
import HomeCategories from '../../components/HomeCategories/HomeCategories'
import HomeDeals from '../../components/HomeDeals/HomeDeals'
import FeaturesProducts from '../../components/FeaturesProducts/FeaturesProducts'

export default function Home() {
  return (
    <div>
    <HomeSlider/>
    <HomeFeatures/>
    <HomeCategories/>
    <HomeDeals/>
    <FeaturesProducts/>
    </div>
  )
}
