import React from 'react';
import { Link } from 'react-router-dom';

import CocktailListItem from './CocktailListItem';

const CocktailList = (props) => {
  return (
    <div className={`ui card ${props.width} wide column cocktail-list`}>
    <span to="/cocktails/new" className="item">
      <div className="content">
        <Link to="/cocktails/new" className="header">
          <i className="beer icon"></i>
          New Cocktail
        </Link>
      </div>
    </span>
      <div className="ui list">
        {props.cocktails.map(x => <CocktailListItem key={x.id} cocktail={x} selectCocktail={props.selectCocktail} />)}

      </div>
    </div>
  )
}

export default CocktailList;
