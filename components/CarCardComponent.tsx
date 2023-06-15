"use client"
import { CarCardProps } from '@/types'
import { calculateCarRentPrice, generateCarImageUrl } from '@/utils'
import Image from 'next/image'
import React, { useState } from 'react'
import { CustomBtn } from '.'
import CarDetails from './CarDetails'

interface CarCard {
    car: CarCardProps
}
const CarCardComponent = ({ car }: CarCard) => {
    const { city_mpg, drive, make, model, transmission, year } = car
    const [isOpen, setIsOpen] = useState(false)
    // console.log(city_mpg, year)

    const carRent =  calculateCarRentPrice(city_mpg, year);
    return (
        <>
            <div className='car-card group'>
                <div className='car-card__content'>
                    <h1 className='car-card__content-title'>{make} {model}</h1>
                </div>
                <p className='flex mt-6 text-[32px] leading-[38px] font-extrabold'>
                    <span className='self-start text-[14px] leading-[17px] font-semibold'>$</span>
                    {carRent}
                    <span className='self-end text-[14px] leading-[17px] font-medium'>/day</span>
                </p>
                <div className='relative w-full h-40 my-3 object-contain'>
                    <Image src="/hero.png" alt='car model' fill priority className='object-contain' />
                </div>

                <div className='relative flex w-full mt-2'>
                    <div className='flex group-hover:invisible w-full justify-between text-grey'>
                        <div className='car-card__icon'>
                            <Image src="/steering-wheel.svg" width={20} height={20} alt='steering-wheel' />
                            <p className='car-card__icon-text'> {transmission === "a" ? "Automatic" : "Manual"}</p>
                        </div>
                        <div className='car-card__icon'>
                            <Image src="/tire.svg" width={20} height={20} alt='tire' />
                            <p className='car-card__icon-text'>{drive.toUpperCase()}</p>
                        </div>
                        <div className='car-card__icon'>
                            <Image src="/gas.svg" width={20} height={20} alt='tire' />
                            <p className='car-card__icon-text'>{city_mpg} MPG</p>
                        </div>
                    </div>

                    <div className='car-card__btn-container'>
                        <CustomBtn
                            title='View More'
                            containerStyle='w-full py-[16px] rounded-full bg-primary-blue'
                            btnType='button'
                            textStyles='text-white text-[14px] leading-[17px] font-bold'
                            rightIcon='/right-arrow.svg'
                            handleClick={() => setIsOpen(true)}
                        />
                    </div>
                </div>
                <CarDetails car={car} isOpen={isOpen} closeModel={() => setIsOpen(false)} />
            </div>
        </>
    )
}

export default CarCardComponent