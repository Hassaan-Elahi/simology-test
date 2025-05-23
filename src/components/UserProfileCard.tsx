import { useState } from 'react';
import './UserProfileCard.css';

// Define props interface for future extensibility
interface UserProfileCardProps {
  isOwnProfile?: boolean;
}

const UserProfileCard = ({ isOwnProfile = false }: UserProfileCardProps) => {
  // State for handling follow button toggle
  const [isFollowing, setIsFollowing] = useState(false);

  // Handler for follow button click
  const handleFollowClick = () => {
    setIsFollowing(prev => !prev);
  };

  return (
    <div className="user-profile-card">
      {/* Avatar Section */}
      <div className="avatar">
        {/* Using a placeholder gradient circle as avatar */}
        <div className="avatar-placeholder"></div>
      </div>

      {/* User Information Section */}
      <div className="user-info">
        <h2 className="full-name">John Doe</h2>
        <p className="username">@johndoe</p>
        
        {/* Location Section */}
        <p className="location">
          <span className="location-icon">📍</span>
          San Francisco, CA
        </p>
        
        {/* Bio Section */}
        <p className="bio">
          Frontend developer passionate about creating beautiful user interfaces.
          Love to explore new technologies and share knowledge with the community.
        </p>

        {/* Follow Button - Conditionally rendered based on isOwnProfile */}
        <button 
          className={`follow-button ${isFollowing ? 'following' : ''} ${isOwnProfile ? 'own-profile' : ''}`}
          onClick={handleFollowClick}
          disabled={isOwnProfile}
        >
          {isOwnProfile ? 'Own Profile' : (isFollowing ? 'Following' : 'Follow')}
        </button>
      </div>
    </div>
  );
};

export default UserProfileCard; 