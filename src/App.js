
import { Provider } from 'react-redux';
import Body from './components/Body';
import  Store  from './utils/Store';


// https://netflix-gpt-400cd.web.app/



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
