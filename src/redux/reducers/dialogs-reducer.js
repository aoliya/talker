import {UPDATE_NEW_MESSAGE_TEXT,
        SEND_MESSAGE
        }from '../../constants/dialogs.constants'
 


let initialState = {
    dialogsData: [
        { id: 1, name: 'Orly' },
        { id: 2, name: 'Daniel' },
        { id: 3, name: 'Michael' },
        { id: 4, name: 'Einat' },
      
      ],

      messagesData: [
      
        {id: 1, message: 'Hi'}, 
        {id: 2, message: 'Heeey'}, 
        {id: 3, message: 'Hooo'}
      ],

      newMessageText: ''
}

 const dialogsReducer = (state=initialState, action) => {
  
  switch(action.type){
        case UPDATE_NEW_MESSAGE_TEXT:
          return {
            ...state,
            newMessageText: action.body  
        };
        case SEND_MESSAGE:
          let body = state.newMessageText;
          return {
            ...state,
            newMessageText:'',
            //adding new el to an array
            messagesData: [...state.messagesData, {id:6, message: body}]
        
        };
         default:
            return state;
    }

}

export const sendMessageCreator = () => ({
    type:SEND_MESSAGE
  })
  
export const updateNewMessageTextCreator = (text) => ({     type: UPDATE_NEW_MESSAGE_TEXT,
      body: text
  })

export default dialogsReducer