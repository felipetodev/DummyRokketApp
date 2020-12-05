import Home from './pages/Home'
// import GlobalStyles from './components/GlobalStyles'
import { Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Route path={['/posts/:id', '/']}>
        {/* <GlobalStyles /> */}
        <Home />
      </Route>
    </div>
  );
}

export default App;
