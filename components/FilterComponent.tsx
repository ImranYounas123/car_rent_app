"use client";

import { customFilterProps } from '@/types'
import React from 'react'
import { Listbox, Transition } from '@headlessui/react'
import Image from 'next/image';
const FilterComponent = ({ title, options }: customFilterProps) => {

    const [selected, setSelected] = React.useState(options[0]);

    return (
        <div className='w-fit'>
            <Listbox value={selected} onChange={() => { }} >
                <div className="relative mt-1">
                    <Listbox.Button className="custom-filter__btn">
                        <span className='block truncate'>{selected.title}</span>
                        <Image src='/chevron-up-down.svg' width={20} height={20} className='ml-4 object-contain' alt='chevron_up-down' />
                    </Listbox.Button>
                    <Transition
                        as={React.Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options className="custom-filter__options">


                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
        </div>
    )
}

export default FilterComponent