
import PropTypes from 'prop-types';
import { Container, Description, Avatar, Name, Tag, Location, Stats, Items, Label, Quantity } from './Profile.styled'; 
export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <Container>
      <Description>
        <Avatar src={avatar} alt="User avatar"  />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <Items>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </Items>
        <Items>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </Items>
        <Items>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </Items>
      </Stats>
    </Container>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};