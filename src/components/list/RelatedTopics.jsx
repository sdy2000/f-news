import React from 'react'
import { Link } from 'react-router-dom'

const RelatedTopics = ({ topics }) => {
    return (
        <ul className='topic-list'>
            {
                topics.map((topic, idx) => (
                    <li key={idx}><Link to='#'>{topic}</Link></li>
                ))
            }
        </ul>
    )
}

export default RelatedTopics