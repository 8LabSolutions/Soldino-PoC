import { connect } from 'react-redux';
import UserInfo from '../presentational/UserInfo';

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const UserInfoContainer = connect(mapStateToProps, null)(UserInfo);

export default UserInfoContainer;
