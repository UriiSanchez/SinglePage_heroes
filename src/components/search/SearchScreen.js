import React, { useMemo } from 'react'
import queryString from "query-string";
import { useLocation } from 'react-router';
import { useForm } from '../../hooks/useForm';
import HeroCard from '../heroes/HeroCard';
import getHeoresByName from '../../selectors/getHeoresByName';

const SearchScreen = ({history}) => {
    const location = useLocation();
    const {q = ''} = queryString.parse(location.search)
    const [ formValues, handleInputChange] = useForm( {searchText: q} );
    const {searchText} = formValues;
    const herosFiltered = useMemo(() => getHeoresByName(q), [q]);
    
    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${searchText}`)
    }

    return (
        <div>
            <h1>Search Screen</h1>
            <hr/>
            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr/>
                    <form onSubmit={handleSearch}>
                        <input type="text" placeholder="Find your hero" autoComplete="off" className="form-control" name="searchText"
                            value={searchText} onChange={handleInputChange}
                        />
                        <button type="submit" className="btn m-1 btn-lg btn-block btn-outline-primary">Searc...</button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    {q === '' && <div className="alert alert-info">Search a hero</div>}
                    {q !== '' &&  herosFiltered.length === 0 && <div className="alert alert-danger">There is no a hero with {q}</div>}
                    {
                        herosFiltered.map(hero => (
                            <HeroCard key={hero.id} {...hero}/>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default SearchScreen
