import { Route, Redirect } from 'react-router-dom'

import About from './views/About/About'
import CountryDetailContainer from './components/CountryDetailContainer/CountryDetailContainer'
import Home from './views/Home/Home'
import Create from './views/Create/Create'

function App() {
  return (
    <div className="App">
      <Route exact path="/home" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/create" component={Create} />
      <Route exact path="/countries/:id" component={CountryDetailContainer} />
      <Route exact path="/countries">
        <Redirect to="/home" />
      </Route>
    </div>
  )
}

export default App
