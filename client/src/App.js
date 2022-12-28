import { Route } from 'react-router-dom'

import About from './views/About/About'
import CountryDetailContainer from './components/CountryDetailContainer/CountryDetailContainer'
import Home from './views/Home/Home'
import Create from './views/Create/Create'

function App() {
  return (
    <div className="App">
      <Route exact path="/countries" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/create" component={Create} />
      <Route exact path="/countries/:id" component={CountryDetailContainer} />
    </div>
  )
}

export default App
