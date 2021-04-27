const simulateData = require('../../services/data.json')

const initialState = simulateData

const COMPLETE = 'COMPLETE'

export  const complete = id => ({
    type: COMPLETE, 
    payload : id
})

export default (state = initialState, action) => {
    switch(action.type) {
        case COMPLETE : 
          return state.map( x => x.id === action.payload ? ({...x, completed: !x.completed}) : x )
        
        default : 
         return state
    }
    return state
}