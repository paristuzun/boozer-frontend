import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Search from './Search'

import CocktailList from './CocktailList';
import CocktailDetail from './CocktailDetail';
import CocktailForm from './CocktailForm';
import API from '../services/Backend';

class CocktailContainer extends React.Component {

	state = {
		searchTerm: '',
    cocktails: []
  }

	componentDidMount() {
		fetch('http://localhost:3000/api/v1/cocktails')
			.then(res => res.json())
			.then(cocktails => this.setState({ cocktails }));
	}

	addCocktail = (cocktail) => {
    let newCocktail = this.state.cocktails.concat(cocktail)
    this.setState({ cocktails: newCocktail })
  }

	handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }


	render = () => {
    return (
      <div className="ui grid container">
			<Search
			  width="sixteen"
			  searchTerm={this.state.searchTerm}
				handleChange={this.handleChange} />

			<Switch>
				<Route path="/cocktails/new" render={() => (
					localStorage.getItem("name") ? (
						<CocktailForm width="ten" addCocktail={this.addCocktail} />
					) : <Redirect to="/login" />
				)} />

				</Switch>

				<CocktailList
					width="five"
					cocktails={this.state.cocktails}
					selectCocktail={this.selectCocktail}
					toggleForm={this.showForm}
				/>
				<Switch>
				<Route path="/cocktails/:id" render={({ match }) => {
					let cocktailId = parseInt(match.params.id)
					let cocktail = this.state.cocktails.find(cocktail => cocktail.id === cocktailId)
					return cocktail ? <CocktailDetail width="ten" cocktail={cocktail} /> : null;
				}} />
			</Switch>
      </div>
    )
  }
}


export default CocktailContainer
