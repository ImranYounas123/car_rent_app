import { CarCardProps } from '@/types'
import { generateCarImageUrl } from '@/utils'
import Image from 'next/image'
import React from 'react'

interface CarCard {
    car: CarCardProps
}

const CarCardComponent = ({ car }: CarCard) => {
    const { city_mpg, drive, make, model, transmission, year } = car
    console.log(make)
    return (
        <>
            <div className='car-card group'>
                <div className='car-card__content'>
                    <h1 className='car-card__content-title'>{make} {model}</h1>
                </div>
                <p className='flex mt-6 text-[32px] leading-[38px] font-extrabold'>
                    <span className='self-start text-[14px] leading-[17px] font-semibold'>$</span>
                    {4343}
                    <span className='self-end text-[14px] leading-[17px] font-medium'>/day</span>
                </p>
                <div className='relative w-full h-40 my-3 object-contain'>
                    <Image src="/hero.png" alt='car model' fill priority className='object-contain' />
                </div>
            </div>
        </>
    )
}

export default CarCardComponent