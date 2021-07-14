import React from 'react';
import s from './dialogs.module.css';
import SingleDialog from '../singleDialog/SingleDialog';
import SingleMessage from '../messages/SingleMessage';
import {Redirect} from 'react-router-dom'


const Dialogs =(props) =>{

let state = props.dialogsPage;

let dialogsElements = state.dialogsData.map(dialog => <SingleDialog name={dialog.name} key={dialog.id} id={dialog.id} />
)

let messageElements =  state.messagesData.map(message => <SingleMessage message={message.message} key={message.id}/>)

let newMessageText = state.newMessageText;


const onSendMessageClick = () => {
    props.sendMessage();
}

const onMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
}


if(!props.isAuth) {
    return <Redirect to={'/login'} />

}
  return (

      <div className={s.dialogs}>
          <div className={s.dialogsItems}>
            
              {dialogsElements}
                           
          </div>
          <div className={s.messages}>
              <div>{messageElements}</div>
              <div>
                  <div><textarea placeholder='Enter your message' 
                  value={newMessageText}
                  onChange={onMessageChange}></textarea></div>
                  <div><button onClick={onSendMessageClick}>Send</button></div>
              </div>
          </div>
      </div>
  )
}

export default Dialogs;