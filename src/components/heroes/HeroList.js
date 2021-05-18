import React, { useMemo } from 'react';
import { getHeroeByPublisher } from '../../selectors/getHeroeByPublisher';
import HeroCard from './HeroCard';

const HeroList = ({publisher}) => {
    const heroes = useMemo(() => getHeroeByPublisher(publisher), [publisher]);

    return ( <div className="card-columns animate__animated animate__fadeIn">
        {heroes.map(hero => {
            return <HeroCard key={hero.id} {...hero}/>
        })}
    </div> );
}
 
export default HeroList;