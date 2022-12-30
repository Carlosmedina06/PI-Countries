import { Route } from 'react-router-dom'

import CountryDetailContainer from './components/CountryDetailContainer/CountryDetailContainer'
import Create from './views/Create/Create'
import Home from './views/Home/Home'
import Landing from './views/Landing/Landing'

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Landing} />
      <Route exact path="/countries" component={Home} />
      <Route exact path="/create" component={Create} />
      <Route exact path="/countries/:id" component={CountryDetailContainer} />
    </div>
  )
}

export default App
