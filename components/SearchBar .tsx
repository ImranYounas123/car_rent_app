import Image from 'next/image'
import React from 'react'

const SearchBtn = ({ otherClasses }: { otherClasses: string }) => (
    <button type='submit' className={`-ml-3 z-10 ${otherClasses}`}>
        <Image
            src={"/magnifying-glass.svg"}
            alt={'magnifying glass'}
            width={40}
            height={40}
            className='object-contain'
        />
    </button>
)


const SearchBar = () => {
    return (
        <>
            <form className='searchbar'>
                <div className='searchbar__item'>
                    <SearchBtn otherClasses='sm:hidden' />
                </div>
                <div className='searchbar__item'>
                    <Image
                        alt='car model'
                        src={"/model-icon.png"}
                        width={25}
                        height={25}
                        className='absolute w-[20px] h-[20px] ml-4'
                    />
                    <input
                        type='text'
                        name='model'
                        className='searchbar__input'
                        placeholder='Tiguan...'
                    />
                    <SearchBtn otherClasses='sm:hidden' />
                </div>
                <SearchBtn otherClasses='max-sm:hidden' />
            </form>
        </>
    )
}

export default SearchBar 