import { ShowMoreProps } from '@/types'
import React from 'react'
import { CustomBtn } from '.'

const ShowMore = ({ pageNumber, isNextPage }: ShowMoreProps) => {
    return (
        <div className='w-full flex-center gap-5 mt-10'>
            {
                isNextPage &&
                <CustomBtn
                    title="Show More"
                    btnType="button"
                    containerStyle="bg-primary-blue rounded-xl text-white"
                />
            }
        </div>
    )
}

export default ShowMore