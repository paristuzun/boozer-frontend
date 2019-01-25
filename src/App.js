import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import CocktailContainer from './components/CocktailContainer';
import Login from './components/Login'

class App extends Component {

  state = {
    user: localStorage.getItem("name")
  }

  updateUser = (user) => {
    this.setState({ user: user })
  }

  logout = () => {
    this.setState({ user: null })
    localStorage.clear()
  }

  // render() {
  //   return (
  //     <div>
  //       <h2 className="ui center aligned icon header">
  //         <i className="beer icon" />
  //
  //       </h2>
  //       <CocktailContainer />
  //     </div>
  //   );
  // }


  render() {
    let desc = "Search and create cocktails"
    return (
      <div className="App ui container">
        <Navbar user={this.state.user} logout={this.logout} color="white" icon="" title="Boozer" description={desc} />
        <Switch>
          <Route path="/login" render={() => {
              return <Login updateUser={this.updateUser} />
          }} />
          <Route path="/" component={CocktailContainer} />
        </Switch>
      </div>
    );
  }

}

export default App;
