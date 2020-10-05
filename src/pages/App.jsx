import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import Cart from './Cart';
import Orders from './Orders';
import Checkout from './Checkout';
import Signup from './Signup';
import Error from './Error';


class App extends Component {
    render() {
        console.log("Hello Hari");
        return (
            <div>
                <Router>
                <Header />
                <div class="container">
        
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/signup" component={Signup} />
                        <Route exact path="/cart" component={Cart} />
                        <Route exact path="/orders" component={Orders} />
                        <Route exact path="/checkout" component={Checkout} />
                        <Route component={Error} />
                    </Switch>
              
                </div>
                  </Router>
                 <Footer />
                
            </div>
        );
    }
}

export default App;