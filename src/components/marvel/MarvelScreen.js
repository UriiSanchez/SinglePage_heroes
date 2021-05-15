import HeroList from "../heroes/HeroList"

const MarvelScreen = (props) => {
    return ( <div>
        <h1>Marvel</h1>
        <hr/>
        <HeroList publisher="Marvel Comics"/>
    </div> );
}
 
export default MarvelScreen;