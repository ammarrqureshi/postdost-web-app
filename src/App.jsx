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
