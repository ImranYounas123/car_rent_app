import { manufacturers } from '@/constants'
import { SearchManuFacturerProps } from '@/types'
import { Combobox, Transition } from '@headlessui/react'
import Image from 'next/image'
import React from 'react'

const SearchManufacturer = ({ manufacturer, setManufacturer }: SearchManuFacturerProps) => {
    const [query, setQuery] = React.useState('')

    const filterManufacturers = query === "" ? manufacturers : manufacturers.filter((item) =>
        item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
    );
    console.log(manufacturers)
    return (
        <>
            <div className='search-manufacturer '>
                <Combobox value={manufacturer} onChange={setManufacturer}>
                    <div className='relative w-full'>
                        <Combobox.Button className="absolute top-[14px]">
                            <Image
                                alt='car logo'
                                src={"/car-logo.svg"}
                                width={20}
                                height={20}
                                className='ml-4'
                            />
                        </Combobox.Button>
                        <Combobox.Input
                            className="search-manufacturer__input"
                            placeholder='Volkswagen...'
                        />
                    </div>
                    <Transition
                        as={React.Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0">
                        <Combobox.Options className='search-manufacturer__options' static>
                            {
                                manufacturers.length !== 0 && query === "" ? (
                                    <Combobox.Option value={query}>
                                        Create "{query}"
                                    </Combobox.Option>
                                ) : (
                                    filterManufacturers.map((item, index) => (
                                        <Combobox.Option key={item} value={item}>
                                            {({ selected, active }) => (
                                                <>
                                                    <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                                                        {item}
                                                    </span>
                                                    {/* Show an active blue background color if the option is selected */}
                                                    {selected ? (
                                                        <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? "text-white" : "text-pribg-primary-purple"}`}
                                                        ></span>
                                                    ) : null}
                                                </>
                                            )}
                                        </Combobox.Option>
                                    ))
                                )
                            }
                        </Combobox.Options>
                    </Transition>
                </Combobox>
            </div>
        </>
    )
}

export default SearchManufacturer 