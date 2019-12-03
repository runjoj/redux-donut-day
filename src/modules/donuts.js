const initialState = {
  donutOrderList: [
    {
      id: 1,
      name: 'Brianna',
      flavor: 'Everything Bagel Doughnut'
    },
    {
      id: 2,
      name: "Alex",
      flavor: 'Blackberry Hibiscus'
    },
    {
      id: 3,
      name: 'Dan',
      flavor: 'The biggest coffee roll ever'
    }
  ]
}

const donuts = (state = initialState, action) => {
  switch(action.type) {
    case ADD_DONUT:
      const newOrderList = state.donutOrderList.concat(action.donut)
      return {...state, donutOrderList: newOrderList}
    case HANDLE_NAME_CHANGE:
      return {...state, name: action.newName}
    case HANDLE_FLAVOR_CHANGE:
      return {...state, flavor: action.newFlavor}
    case CLEAR_FORM:
      return {...state, name: '', flavor: ''}
    default:
      return state
  }
};

const ADD_DONUT = 'ADD_DONUT'

const addNewDonut = donut => {
  return {
    type: ADD_DONUT,
    donut
  }
}

const CLEAR_FORM = 'CLEAR_FORM'

const clearForm = () => {
  return {
    type: CLEAR_FORM
  }
}

const HANDLE_NAME_CHANGE = 'HANDLE_NAME_CHANGE'

const handleNameChange = event => {
  const newName = event.target.value
  return {
    type: HANDLE_NAME_CHANGE,
    newName
  }
}

const HANDLE_FLAVOR_CHANGE = 'HANDLE_FLAVOR_CHANGE'

const handleFlavorChange = event => {
  const newFlavor = event.target.value
  return {
    type: HANDLE_FLAVOR_CHANGE,
    newFlavor
  }
}

export {
  addNewDonut,
  donuts,
  clearForm,
  handleNameChange,
  handleFlavorChange
};
