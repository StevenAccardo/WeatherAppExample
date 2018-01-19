import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';


class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = { term: '' };

    //Fixes the context that the this variable points to in the onInputChange function, by using the bind method to bind the SearchBar class's this variable to the function.
    //Bind makes a copy of the function with the new this context
    //Usually whe you pass a callback around, you have to bind the context of this
    //Usually the easiest place to bind a function
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }


  //Function called by the event handler in the below input. Note that the function is created outside the constructor and render methods, but within the class.
  onInputChange(event) {
    //The value of this is not going to point to the the value of the this variable that was created by the class, it will point to another context
    this.setState({term: event.target.value});
  }
  //event handler function
  onFormSubmit(event) {
    //prevents the default action from happening, in this case a POST to the server, aka HTML Form submission.
    event.preventDefault();

    //this accessess props and calls the action creator fetchWeather and passes it the users city which is now stored in this.state.term.
    this.props.fetchWeather(this.state.term);
    //Sicne we disabled the default functionality of the form element, in order for the UX to feel natural, we will also clear set the state back to an empty string. Since the input is a controlled component, it will show the state in the input, which will be an empty string. Therfore it will look as if the input was cleared upon submitting the request.
    this.setState({ term: '' });
  }


  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        {/*We are creating a controlled component, where the value fo the input is set by the state component as opposed to the state being set by the value of the input. So as the user types, that triggers the onChange handler which updates the state with the typed string. So when the user clicks submit, we won't request the value in the input, we will pull the value from the component's state. Kind of a confusing way of explining this.*/}
        <input
          placeholder="Get a five-day forecast in your favorite cities"
          className="form-control"
          //*As the user types, it appears that their characters are being shown in the search bar, however, those characters are actually being stored in the component's state. The value for that input is being pulled from this.state.term. So if we set a constant for the value above in the cunstructor, and didn't update that value as the user typed, you would never see the characters they are typing, but doing it this way, the user will see the input act as they suspect, even though in reality it is not.
          value={this.state.term}
          //You have to create the function that is called by the handler, this is the case with all event handlers.
          //When you call a function like this, the value of this that the function uses is not going to be the this variable that belongs to the the class.
          onChange={this.onInputChange}
        >
        </input>
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}
//Only need this if this container is going to call an actionCreator from within the container, or one of its children elements will need too.
function mapDispatchToProps(dispatch) {
  //This gives us access to the function this.props.fetchWeather now.
  return bindActionCreators({ fetchWeather }, dispatch);
}
//Normally the first arguement passed is mapStateToProps, but in this situation, this container doesn't care what the application state is. This constainer is just sending some data to the reducers, and isn't actually receiving any state. So there is no mapStateToProps function. However, mapDispatchToProps always must be the second argument, so in order to maintain that, we pass in null as the first argumnet as a sort of place holder.
export default connect(null, mapDispatchToProps)(SearchBar);
