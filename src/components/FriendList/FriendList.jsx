import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem'
import { FriendListBox, Item } from './FriendList.styled';

 function FriendList({ friends }) {
    return (<FriendListBox>
      {friends.map(({ avatar, name, isOnline, id }) =>
        <Item key={id}>
          <FriendListItem
            avatar={avatar}
            name={name}
            isOnline={isOnline} />
          </Item>
             )}
 </FriendListBox>)
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export {FriendList}