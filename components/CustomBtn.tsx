import { customBtnprops } from '@/types'
import Image from 'next/image';
import React from 'react'

const Button = ({ title, btnType, containerStyle, handleClick, isDisabled, rightIcon, textStyles }: customBtnprops) => (
    <button
        type={btnType || 'button'}
        className={`custom-btn ${containerStyle}`}
        onClick={handleClick}
    >
        <span className={`flex-1 ${textStyles}`}>{title}</span>
        {
            rightIcon && (
                <div className='relative w-6 h-6'>
                    <Image
                        src={rightIcon}
                        alt='arrow_left'
                        fill
                        className='object-contain'
                    />
                </div>
            )
        }
    </button>
);

export default Button