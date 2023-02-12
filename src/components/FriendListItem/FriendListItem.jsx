import PropTypes from 'prop-types';
import { Item, Avatar, Name, FriendStatus } from './FriendListItem.styled';

export default function FriendListItem ({ avatar, name, isOnline, id }) {
    return (<Item key={id}>
        <FriendStatus isOnline={isOnline}></FriendStatus>
        <Avatar src={avatar} alt="User avatar" width="48" />
        <Name>{name}</Name>
    </Item>);
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};