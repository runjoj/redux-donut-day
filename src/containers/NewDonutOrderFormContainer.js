import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clearForm, handleNameChange, handleFlavorChange, addNewDonut } from '../modules/donuts'

import InputField from '../components/InputField'

class NewDonutOrderFormContainer extends Component {
  constructor(props) {
    super(props);

    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  // Below function will utilize the donutOrderList from your store and
  // calculates id of next item in place of a database
  calculateNewId() {
    if (this.props.donutOrderList.length === 0) {
      return 1
    } else {
      const donutIds = this.props.donutOrderList.map(donut => donut.id)
      return Math.max(...donutIds) + 1
    }
  }

  handleFormSubmit(event) {
    event.preventDefault()
    const newId = this.calculateNewId()

    const newDonut = {
      id: newId,
      name: this.props.name,
      flavor: this.props.flavor
    }

    this.props.addNewDonut(newDonut)

    this.props.clearForm()
  }

  render() {
    return (
      <div className='small-6 columns'>
        <h1>Add a New Donut Order</h1>
        <form onSubmit={this.handleFormSubmit}>
          <InputField
            key='newName'
            label='Your Name'
            type='text'
            name='newName'
            handleChange={this.props.handleNameChange}
          />
          <InputField
            key='newFlavor'
            label='Flavor'
            type='text'
            name='newFlavor'
            handleChange={this.props.handleFlavorChange}
          />
          <input type='submit' />
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.donuts.name,
    flavor: state.donuts.flavor,
    donutOrderList: state.donuts.donutOrderList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNewDonut: (donut) => dispatch(addNewDonut(donut)),
    handleNameChange: (event) => dispatch(handleNameChange(event)),
    handleFlavorChange: (event) => dispatch(handleFlavorChange(event)),
    clearForm: () => dispatch(clearForm())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewDonutOrderFormContainer)
