import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem'
import { FriendListBox } from './FriendList.styled';

 function FriendList({ friends }) {
    return (<FriendListBox>
        {friends.map(({ avatar, name, isOnline, id }) =>
            <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline} /> )}
 </FriendListBox>)
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export {FriendList}