import {Switch, Route, Redirect} from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import CourseDetails from './components/CourseItemDetails'
import NotFound from './components/NotFound'

// Replace your code here
const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/courses/:id" component={CourseDetails} />
      <Route exact path="/not-found" component={NotFound} />
      <Redirect to="/not-found" />
    </Switch>
  </>
)

export default App
