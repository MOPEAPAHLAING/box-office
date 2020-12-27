import React from 'react'
import { useParams } from 'react-router-dom';
import Cast from '../components/show/Cast';
import Details from '../components/show/Details';
import Seasons from '../components/show/Seasons';
import ShowMainData from '../components/show/ShowMainData';
import { useShow } from '../misc/custom-hooks';
import { InfoBlock, ShowPageWrapper } from './Show.styled';

const Show = () => {
    const {id } = useParams();

    const { show, isLoading, error} = useShow(id);


    if(isLoading){
        return (
            <div>Date is being loaded</div>
        )
    }

    if(error){
        return <div>Error orccured: {error}</div>
    }

    return (
        <ShowPageWrapper>
            <ShowMainData
                image={show.image}
                name={show.name}
                rating={show.rating}
                summary={show.summary}
                tags={show.geners}
            />
            <InfoBlock>
                <h2>Details</h2>
                <Details
                    status={show.status}
                    network={show.network}
                    premiered={show.premiered}
                />
            </InfoBlock>
            <InfoBlock>
                <h2>Seasons</h2>
                <Seasons seasons={show.embedded.seasons} />
            </InfoBlock>
            <InfoBlock>
                <h2>Casts</h2>
                <Cast cast={show.embedded.cast} />
            </InfoBlock>
        </ShowPageWrapper>
    )
}

export default Show