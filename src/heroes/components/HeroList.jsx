import { useMemo } from 'react';
import { getHeroesByPublisher } from '../helpers'
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }) => {

    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher])

    return (
        <div className='row rows-cols-1 row-cols-md-3 g-3'>
            {
                heroes.map(hero => ( // tener en cuenta que si yo pusiera {} para encerrar el li en vez de () me tiraría error
                    <HeroCard
                        key={hero.id}
                        {...hero}
                    />
                ))
            }
        </div>
    )

}
