import React from "react"
// importing full screen module
import Fullscreen from "react-full-screen"

export default class RecipeIndex extends React.Component {
  constructor(props) {
    super(props)
    // Boolean state for hiding components on clicks
    this.state = {
      isFull: false,
    }
  }

  // Called whenever we want to go to full screen
  goFull = () => {
    this.setState({ isFull: true })
  }

  render() {
    return (
      <section>
        <div className="recipe-card card border-dark">
          <img className="card-img-top" src="/recipe/salmon.jpg" alt="salmon" />
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
              <img className="modal-img-top" src="/recipe/salmon.jpg" style={{ width: "90%" }} alt="Card image cap" />
              <div className="modal-body">
              Some quick example text to build on the card title and make up the bulk of the card's content.
              </div>
              <div className="modal-footer">
                {/* button for going to cooking view */}
                <button type="button" className={"btn btn-secondary"} data-dismiss="modal" onClick={this.goFull}>Cook Me</button>
                <button type="button" className={"btn btn-secondary"} data-dismiss="modal">Spork</button>
                {/*  magically necessary to make the browser fullscreen from yarn package react-full-screen */}
                <Fullscreen
                  children=""
                  enabled={this.state.isFull}
                  // callback is called when going to and coming from fullscreen
                  onChange={isFull => this.props.toggleCookingView()}
                >
                </Fullscreen>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}