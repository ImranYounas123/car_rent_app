// 'use client';

import { FilterComponent, SearchBar } from '@/components'
import CarCardComponent from '@/components/CarCardComponent';

import Hero from '@/components/Hero'
import ShowMore from '@/components/ShowMore';
import { fuels, yearsOfProduction } from '@/constants'
import { CarCardProps, homeProps } from '@/types'
import { fetchCars } from '@/utils'
import Image from 'next/image'

export default async function Home({ searchParams }: homeProps) {

  const getAllCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
    year: searchParams.year || 2023
  });
  // const 
  const isNoCars = !Array.isArray(getAllCars) || getAllCars.length < 1 || !getAllCars
  console.log((searchParams.limit || 10) > getAllCars?.length)
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
          {
            !isNoCars ? (
              <section>
                <div className='home__cars-wrapper'>
                  {
                    getAllCars?.map((car) => (
                      <CarCardComponent car={car} />
                    ))
                  }
                </div>
                <ShowMore
                   pageNumber={(searchParams.limit || 5) / 5}
                   isNextPage={(searchParams.limit || 5) > getAllCars.length}
                />
              </section>
            ) :
              (
                <div className='home__error-container'>
                  <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
                  <p>{getAllCars?.message}</p>
                </div>
              )
          }
        </div>
      </div>
    </main>
  )
}
