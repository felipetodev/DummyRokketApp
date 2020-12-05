import Home from './pages/Home'
import { Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Route path={['/game/:id', '/']}>
        <Home/>
      </Route>
    </div>
  );
}

export default App;
