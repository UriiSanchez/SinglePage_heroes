import HeroList from "../heroes/HeroList"

const DcScreen = () => {
    return ( <div>
        <h1>DC Comics</h1>
        <hr/>
        <HeroList publisher="DC Comics"/>
    </div> );
}
 
export default DcScreen;