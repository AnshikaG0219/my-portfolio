import React from 'react'
import { Image } from 'react-bootstrap'

export default function Tech({techstack}) {
    return (
        <Image title={techstack.title} src={techstack.src}/>
    )
}
