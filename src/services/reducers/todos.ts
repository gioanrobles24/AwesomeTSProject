const simulateData = require('../../services/data.json')

const initialState = simulateData
let answerComplete = 0 

const COMPLETE = 'COMPLETE'
const GETCOMPLETE = 'GETCOMPLETE'

export  const complete = (payload) => ({
    type: COMPLETE, 
    payload : payload
})
export const getComplete = () => ({
    type: GETCOMPLETE,
})

export default (state = initialState,  action) => {
    switch(action.type) {
        case COMPLETE : 
         state.answeResult = action.payload
         console.log(state.answeResult)
        default : 
         return state
    }
    return state
}