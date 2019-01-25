import React from 'react';
import { Link } from 'react-router-dom';

const CocktailListItem = (props) => {
  return (
    <Link to={`/cocktails/${props.cocktail.id}`} className="item">

      <div className="content">
        <a className="header">{props.cocktail.name}</a>
      </div>
    </Link>
  )
}

export default CocktailListItem;
