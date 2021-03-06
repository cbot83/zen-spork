import React from "react";
import LearnMore from "./LearnMore.jsx";

// The recipe cards that show up on the homepage view
export default class RecipeIndex extends React.Component {
  render() {
    const title = this.props.recipe.title;
    // declares the photo_url that is linked to recipe
    const photo = this.props.recipe.photo_url;
    // declares our placeholder photo
    const photoPlaceholder = "./no_spork_image.jpg";
    return (
      <article>
        <div className="recipe-card card">
          {/* renders either photo_url, or if that is a blank string, the placeholder */}
          <img className="card-img-top" src={photo || photoPlaceholder} alt="prepared dish" />
          <div className="card-body">
            <p className={"card-title h3 text-center"}>{title}</p>
            <LearnMore getRecipeById={ this.props.getRecipeById } recipe={this.props.recipe} toggleViews={this.props.toggleViews} sporkRecipe={this.props.sporkRecipe} current_user_id={this.props.current_user_id}/>
          </div>
        </div>
      </article>
    );
  }
}
