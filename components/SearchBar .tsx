"use client";

import Image from 'next/image'
import React from 'react'
import SearchManufacturer from './SearchManufacturer '
import { useRouter } from "next/navigation";

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
    const [manufacturer, setManufacturer] = React.useState('')
    const [model, setModel] = React.useState("");
    const router = useRouter();

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (manufacturer.trim() === "" && model.trim() === "") {
            return alert("Please enter a manufacturer and model")
        }
        updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
    }
    const updateSearchParams = (mdeol: string, manufacturer: string) => {
        // Create a new URLSearchParams object using the current URL search parameters
        const searchParams = new URLSearchParams(window.location.search);
        // Update or delete the 'model' search parameter based on the 'model' value
        if (model) {
            searchParams.set("model", model);
        } else {
            searchParams.delete("model");
        }

        // Update or delete the 'manufacturer' search parameter based on the 'manufacturer' value
        if (manufacturer) {
            searchParams.set("manufacturer", manufacturer);
        } else {
            searchParams.delete("manufacturer");
        }
        // Generate the new pathname with the updated search parameters
        const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
            console.log("newPathname", newPathname);
        router.push(newPathname);
    }
    return (
        <>
            <form className='searchbar' onSubmit={handleSearch}>
                {/* manufacture search  */}
                <div className='searchbar__item'>
                    <SearchManufacturer
                        manufacturer={manufacturer}
                        setManufacturer={setManufacturer}
                    />
                    <SearchBtn otherClasses='sm:hidden' />
                </div>
                {/* model search */}
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
                        value={model}
                        onChange={(e) => setModel(e.currentTarget.value)}
                    />
                    <SearchBtn otherClasses='sm:hidden' />
                </div>
                <SearchBtn otherClasses='max-sm:hidden' />
            </form>
        </>
    )
}

export default SearchBar 