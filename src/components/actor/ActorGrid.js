import React from 'react'
import { FlexGrid } from '../styles'
import ActorCard from './ActorCard'

const ActorGrid = ({ data }) => (
        <FlexGrid>
            {
                data.map( ({person}) => (
                        <ActorCard 
                            key={person.id}
                            name={person.name}
                            country={person.country ? person.country.name : null}
                            birdthday={person.birdthday}
                            deathday={person.deathday}
                            gender={person.gender}
                            image={person.image ? person.image.medium : "IMAGE_NOT_FOUND"}
                        />
                    ))
            }
        </FlexGrid>
    )

export default ActorGrid
