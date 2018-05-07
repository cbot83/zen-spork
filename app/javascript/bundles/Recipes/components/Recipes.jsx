import React from 'react';
import Navbar from './Navbar.jsx'
import CreateRecipe from './CreateRecipe.jsx'

export default class Recipes extends React.Component {

    render() {
    return (
      <div>
        <Navbar current_user={this.props.current_user} />
        <div className="container">
        <CreateRecipe />
          <div className="recipe-card card border-dark">
            <img className="card-img-top" src="/recipe/salmon.jpg" alt="Card image cap"/>
            <div className="card-body">
              <p className={"card-title h3 text-center"}>Salmon Teriyaki Dinner</p>
              <button type="button" className={"btn learn-more"} data-toggle="modal" data-target="#exampleModalCenter">
              Learn More
              </button>
            </div>
          </div>
          <div className="modal" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className={"modal-dialog modal-dialog-centered modal-lg"} role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalCenterTitle">Salmon Teriyaki Dinner</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>

                </div>
                <img className="modal-img-top" src="/recipe/salmon.jpg" style={{width: "90%"}}alt="Card image cap"/>
                <div className="modal-body">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </div>
                <div className="modal-footer">
                  <button type="button" className={"btn btn-secondary"} data-dismiss="modal">Spork</button>
                </div>
              </div>
            </div>
          </div>
          <div className={"recipe-card card"}>
            <img className="card-img-top" src="/recipe/salmon.jpg" alt="Card image cap"/>
            <div className="card-body">
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
          <div className={"recipe-card card"}>
            <img className="card-img-top" src="/recipe/salmon.jpg" alt="Card image cap"/>
            <div className="card-body">
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
           <div className={"recipe-card card"}>
            <img className="card-img-top" src="/recipe/salmon.jpg" alt="Card image cap"/>
            <div className="card-body">
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
          <div className={"recipe-card card"}>
            <img className="card-img-top" src="/recipe/salmon.jpg" alt="Card image cap"/>
            <div className="card-body">
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
          <div className={"recipe-card card"}>
            <img className="card-img-top" src="/recipe/salmon.jpg" alt="Card image cap"/>
            <div className="card-body">
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}