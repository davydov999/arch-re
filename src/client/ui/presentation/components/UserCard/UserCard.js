import React from 'react';
import Loader from '../../components/loader/loader';

const UserCard = ({ user }) => (
  <div className="user-card">
    <Loader loading={user.loading} fullscreen />
    <div className="user-card--head">
      <img src="/assets/img/user-card-bg.jpg" />
    </div>
    <div className="user-card--user-info ">
      <img className="user-card--img" src={user.data.imageUrl} />
      <div className="user-card--name">{user.data.username}</div>
      <div className="user-card--description">{user.data.email}</div>
    </div>
  </div>
);

export default UserCard;
