
import { FilterComponent, SearchBar } from '@/components'

import Hero from '@/components/Hero'
import { fuels, yearsOfProduction } from '@/constants'
import { homeProps } from '@/types'
import { fetchCars } from '@/utils'
import Image from 'next/image'

export default async function Home({ searchParams }: homeProps) {

  const getAllCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
    year: searchParams.year || 2022
  })
  const isNoCars = !Array.isArray(getAllCars) || getAllCars.length < 1 || !getAllCars
  console.log(getAllCars)
  return (
    <main className='overflow-hidden'>
      <Hero />
      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
          <p> Explore out cars you might like</p>
        </div>
        <div className='home__filters'>
          <SearchBar />
          <div className='home__filter-container'>
            <FilterComponent title='fuel' options={fuels} />
            <FilterComponent title='year' options={yearsOfProduction} />
          </div>
        </div>
      </div>
    </main>
  )
}
