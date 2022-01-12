import Country from './country/Country';
import Cover from './cover/Cover'
import Omdeh from './omdeh/Omdeh';
import Saderat from './saderat/Saderat';

const Home = () => {
    return (
        <>
            <Cover />
            <Saderat />
            <Omdeh />
            <Country />
        </>
    );
}

export default Home;