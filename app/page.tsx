
import { FilterComponent } from '@/components'
import Hero from '@/components/Hero'
import Image from 'next/image'
export default function Home() {
  const people = [
    { title: 'Wade Cooper', value: 'wade' },
    { title: 'Arlene Mccoy', value: 'arlene' },
    { title: 'Devon Webb', value: 'devon' },
    { title: 'Tom Cook', value: 'tom' },
    { title: 'Tanya Fox', value: 'tanya' },
    { title: 'Hellen Schmidt', value: 'hellen' },
  ]
  return (
    <main className='overflow-hidden'>
      <Hero />
      <div className='mt-12 padding-x padding-y max-width '>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
          <p> Explore out cars you might like</p>
        </div>
        <div className='home__filters'>
          <div>search</div>
          <div>
            <FilterComponent title='kch bh' options={people} />
            <FilterComponent title='kch bh' options={people} />
          </div>
        </div>
      </div>
    </main>
  )
}
