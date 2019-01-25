import React from 'react';

class CocktailForm extends React.Component {

  state = {
    name: "",
    description: "",
    instructions: "",
    source: ""
  }

  saveCocktail = (event) => {
    event.preventDefault()
    fetch("http://localhost:3000/api/v1/cocktails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Token": localStorage.getItem("token")
      },
      body: JSON.stringify(this.state)
    }).then(res => res.json())
    .then(cocktail => this.props.addCocktail(cocktail))
  }


  render = () =>
    <form class="wide column ui form" onSubmit={this.saveCocktail}>
    <h2>Create a new cocktail</h2>
      <div class="field">
        <label>Name</label>
        <input type="text" name="name" placeholder="Name"
          onChange={(e) => this.setState({ name: e.target.value })} />
      </div>
      <div class="field">
        <label>Description</label>
        <input type="text" name="description" placeholder="cocktail description"
          onChange={(e) => this.setState({ description: e.target.value })} />
      </div>
      <div class="field">
        <label>Instructions</label>
        <input type="text" name="instructions" placeholder="instructions"
          onChange={(e) => this.setState({ instructions: e.target.value })} />
      </div>
      <div class="field">
        <label>Source</label>
        <input type="text" name="source" placeholder="source"
          onChange={(e) => this.setState({ source: e.target.value })} />
      </div>
      <button class="ui button" type="submit">Submit</button>

    </form>
}

export default CocktailForm;
