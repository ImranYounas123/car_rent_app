import { customBtnprops } from '@/types'
import React from 'react'

const Button = ({ title, btnType, containerStyle }: customBtnprops) => (
    <button
        type={btnType || 'button'}
        className={`custom-btn ${containerStyle}`}
    >
        <span>{title}</span>
    </button>
);

export default Button