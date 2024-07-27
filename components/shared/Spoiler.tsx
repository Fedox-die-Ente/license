import React from 'react'

const Spoiler = ({ text } : any) => {
    return (
        <p className={'blur-sm hover:blur-0 transition-all duration-300'}>{text}</p>
    )
}
export default Spoiler
