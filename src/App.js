
import { Provider } from 'react-redux';
import Body from './components/Body';
import  Store  from './utils/Store';


// https://netflix-gpt-400cd.web.app/
//from header add [ ]to useEffect
//same as above videoShow
//Usepouplarmovies
//useTraielrVideo
//useTrendingMovies
//useUpcommingmOVIES
//USEvIDEOtITLE

function App() {


  return (
    <>
    <Provider store={Store}>
    <Body/>
    </Provider>

    </>
  );
}

export default App;
