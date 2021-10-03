import { Component} from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About'
import Header from './components/Header'
import Posts from './pages/Posts'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header/>
        <div>
          <Route path="/" component={Home}/>
          <Switch>
            <Route path="/about/:name" component={About}/>
            <Route path="/about" component={About}/>
          </Switch>
          <Route path="/posts" component={Posts}/>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
