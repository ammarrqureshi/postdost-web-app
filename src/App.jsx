<<<<<<< HEAD
import './App.css'
import Influencer from './components/pages/Influencer/Influencer';

function App() {
  return (
    <Influencer></Influencer>
  )
  }
  
  export default App;
=======
import Explore from './components/pages/Explore/Explore';
import ExploreProvider from './contexts/ExploreContext';
import SignUp from './components/pages/SignUp/SignUp';
import LogIn from './components/pages/LogIn/LogIn';
function App() {
  return (
    <>
      <div className="App">
        {/* <ExploreProvider>
          <Explore />
        </ExploreProvider> */}
        {/* <SignUp /> */}
        <LogIn/>
      </div>
    </>
  );
}
export default App;
>>>>>>> dc05564 (Explore Page)
