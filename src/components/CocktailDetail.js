import React from 'react';

const CocktailDetail = (props) => {


    return (
      <div className={`ui card ${props.width} wide column`}>
        <div className="content">
         <h2>Cocktail Card</h2>
          <div className="header">{props.cocktail.name}</div>
          <div className="meta">{props.cocktail.source}</div>
          <div className="description">
            <i className="triangle right icon" />
            {props.cocktail.description}
          </div>
          <div className="description">
            <i className="triangle right icon" />
            To make: {props.cocktail.instructions}
          </div>
          <div className="description">
            <i className="triangle right icon" />

          </div>
        </div>

      </div>
    )



}



export default CocktailDetail
