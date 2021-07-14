
import {updateNewMessageTextCreator, sendMessageCreator} from '../../../redux/reducers/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {compose} from 'redux'
import {withAuthRedirect} from '../../../hoc/withAuthRedirect'



let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage, 
    }
}
let mapDispatchToProps = (dispatch) => {
    return{
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageTextCreator(body))
        },
        sendMessage: () => {
            dispatch(sendMessageCreator())
        }
    }
}


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);