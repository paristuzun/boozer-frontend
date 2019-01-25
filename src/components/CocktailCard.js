import React from 'react';

const CocktailCard = props => {

	const { cocktail } = props;

	return (
		<div className="card">
		<h2>Cocktail Card</h2>
				<div className="content">
					<div className="header">{props.cocktail.name}</div>
					<div className="meta">{props.cocktail.source}</div>
					<div className="description">{props.cocktail.description}</div>
				</div>
		</div>
	);
};
export default CocktailCard;
