import {Route, Switch} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'
import Home from './components/Home'
import Contact from './components/Contact'
/* 
import ProductItemDetails from './components/ProductItemDetails'
import Cart from './components/Cart'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute' */

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/signup" component={SignupForm} />
    <Route exact path="/login" component={LoginForm} />
    <Route exact path="/" component={Home} />
    <Route exact path="/contact" component={Contact} />
  </Switch>
)

export default App
/*
  <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/products" component={Products} />
    <ProtectedRoute exact path="/products/:id" component={ProductItemDetails} />
    <ProtectedRoute exact path="/cart" component={Cart} />
    <Route path="/not-found" component={NotFound} />
    <Redirect to="not-found" />
    */
