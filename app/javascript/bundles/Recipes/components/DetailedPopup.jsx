import React from "react";
import FullScreenButton from "./FullScreenButton.jsx";

var math = require('mathjs');

function convertFractionToString(fraction) {
  let output = "";
  if (fraction.d === 1) {
    output = output + fraction.n
  } else {
    output = output + fraction.n + "/" + fraction.d;
  }

  return output;
}

function adjustIngredientQuantity(quantity, multiplier) {
  let output = "";
  let fract = math.fraction(quantity);
  fract = math.multiply(fract, multiplier);
  output = convertFractionToString(fract);

  return output;
}

function alterQuantity() {

}

export default class DetailedPopup extends React.Component {

   constructor(props) {
    super(props);
    // Boolean state for hiding components on clicks
    // And recipes array from database
    this.state = {
      servingSize: "original",
    };

    this.adjustServingSize = this.adjustServingSize.bind(this);
  }

  adjustServingSize(e) {
    e.preventDefault();
    this.setState({servingSize: e.target.value})
    console.log(e.target.value);
    //this.render();
  }

  servingMultiplier() {
    if (this.state.servingSize === "half") {
      return 0.5;
    }
    if (this.state.servingSize === "original") {
      return 1;
    }
    if (this.state.servingSize === "double") {
      return 2;
    }
    if (this.state.servingSize === "quadruple") {
      return 4;
    }

    return 1;
  }

  render() {
    const { title, photo_url, content: { intro, gear, warnings, prep_time, cook_time, servings } } = this.props.recipe;
    // declares our placeholder photo
    const photoPlaceholder = "https://thumbs.dreamstime.com/b/black-plastic-spork-14551333.jpg";
    const recipe = this.props.recipe;

    // maps recipe json to extract just the list of ingredients to render
    const listIngredients = recipe.content.steps.map((step) => {
      const ingredients = step.ingredients.map((ingredient) => {
        return (
          <div key={ingredient.name}>
            {adjustIngredientQuantity(ingredient.qty, this.servingMultiplier())} {ingredient.unit}: {ingredient.name}
          </div>);
      });
      return (
        <div key={Math.random()}>
          {ingredients}
        </div>);
    });

    // maps out numbered directions for making the recipe
    const listInstructions = recipe.content.steps.map((instruction, index) => {
      return (
        <div key={Math.random()}>
          <strong>{index + 1}.</strong> {instruction.instructions}
        </div>
      );
    });

    return (
      <article className="DPU-main-container">
        <div className="container">
          <div className="row">
            <div className="DPU-left col-5">
              <h1 className="DPU-title">{title}</h1><br />
              {/* either renders photo from db is it exists or placeholder photo */}
              <img className="DPU-image" src={photo_url || photoPlaceholder} alt="Delicious Food" /><br />
              <strong>Ingredients:</strong><br />
              <div className="DPU-ingredients">
                {listIngredients}<br />
              </div>
              <table className="DPU-table">
                <thead>
                  <tr>
                    <th>Prep-time  </th>
                    <th>Cook-time  </th>
                    <th>Servings  </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{prep_time}</td>
                    <td>{cook_time}</td>
                    <td>{servings}</td>
                  </tr>
                </tbody>
              </table>
              <div className="modal-footer DPU-buttons">
                <FullScreenButton recipe={this.props.recipe} />
                <button type="button" className={"btn btn-secondary"} data-dismiss="modal" onClick={(e) => { this.props.sporkRecipe(this.props.recipe, e); this.props.onClose();}}>Spork</button>
                <button type="button" className={"btn btn-secondary"} data-dismiss="modal" onClick={(e) => { this.props.editRecipe(this.props.recipe, e); }}>Edit</button>
                <br/>
                <form onSubmit={this.handleSubmit}>
                  <label>
                    Adjust Servings:
                  <select value={this.state.servingSize} onChange={this.adjustServingSize}>
                    <option value="half">Half</option>
                    <option value="original">Original</option>
                    <option value="double">Double</option>
                    <option value="quadruple">Quadruple</option>
                  </select>
                  </label>
                </form>
              </div>
            </div>
            <div className="DPU-right col-7 col-centered">
              <strong>Intro:</strong> {intro}<br/><br/>
              <strong>Gear:</strong> {gear}<br/><br/>

              <strong>Instructions:</strong> {listInstructions}<br />
              {/* Warnings: {warnings} */}
            </div>
          </div>
        </div>
      </article>
    );
  }
}