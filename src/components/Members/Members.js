import React from 'react';

import './members.css'
import Avatar from '../Avatar/Avatar';
import AvatarImage from '../../assets/s-avatar.jpg';

const Members = () => {
    return (
        <div>
      <div className="MembersLayout">
        <div>
        <Avatar src={AvatarImage} />
        </div>
        <div className="title">
          <h2>Organizers</h2>
          <h3>Ariel_Andalas 4,Others</h3>
        </div>
      </div>
    </div>

    )
}

export default Members ;