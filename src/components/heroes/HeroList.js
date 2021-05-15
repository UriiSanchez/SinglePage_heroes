import React from 'react';
import { getHeroeByPublisher } from '../../selectors/getHeroeByPublisher';
import HeroCard from './HeroCard';

const HeroList = ({publisher}) => {
    const heroes = getHeroeByPublisher(publisher);
    return ( <div className="card-columns">
        {heroes.map(hero => {
            return <HeroCard key={hero.id} {...hero}/>
        })}
    </div> );
}
 
export default HeroList;