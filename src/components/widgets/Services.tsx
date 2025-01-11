import React from 'react'
import ServicesCard from '../common/ServicesCard'

const Services = () => {
  return (
    <div className='flex gap-2 p-3 '>
      <ServicesCard/>
      <ServicesCard/>
      <ServicesCard/>
    </div>
  )
}

export default Services
