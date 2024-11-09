import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  color: #fff;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const GlassCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border: 1px solid rgba(255, 255, 255, 0.18);

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const ProfileHeader = styled(GlassCard)`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ProfileImageContainer = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  margin-right: 2rem;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 1rem;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid rgba(255, 255, 255, 0.3);
`;

const ProfileStatus = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 20px;
  height: 20px;
  background-color: #4CAF50;
  border-radius: 50%;
  border: 3px solid #fff;
`;

const ProfileInfo = styled.div`
  flex: 1;
`;
const ProfileUsername = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;

const ProfileBio = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
  line-height: 1.5;
`;

const ProfileStats = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
`;

const Stat = styled.div`
  text-align: center;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.25rem;
  }

  p {
    font-size: 0.9rem;
    opacity: 0.8;
  }
`;

const EditProfileButton = styled.button`
  background: linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%);
  border: 0;
  border-radius: 25px;
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, .3);
  color: white;
  padding: 0.5rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 10px 2px rgba(255, 105, 135, .4);
  }
`;

const PostGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
`;

const PostThumbnail = styled(GlassCard)`
  aspect-ratio: 1;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Profile = () => {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Имитация запроса к API для получения данных пользователя
    setUser({
      username: 'neon_dreamer',
      fullName: 'Alex Synth',
      profileImage: 'https://i.pravatar.cc/400?img=12',
      posts: 42,
      followers: 3890,
      following: 567,
      bio: 'Cyberpunk artist | Synthesizer enthusiast | Exploring the boundaries of reality and digital art',
    });

    // Имитация запроса к API для получения постов пользователя
    setPosts([
      { id: 1, imageUrl: 'https://source.unsplash.com/random/600x600?cyberpunk' },
      { id: 2, imageUrl: 'https://source.unsplash.com/random/600x600?neon' },
      { id: 3, imageUrl: 'https://source.unsplash.com/random/600x600?synth' },
      { id: 4, imageUrl: 'https://source.unsplash.com/random/600x600?future' },
      { id: 5, imageUrl: 'https://source.unsplash.com/random/600x600?digital' },
      { id: 6, imageUrl: 'https://source.unsplash.com/random/600x600?abstract' },
    ]);
  }, []);

  const handleEditProfile = () => {
    console.log('Edit profile clicked');
  };

  if (!user) {
    return <ProfileContainer>Loading...</ProfileContainer>;
  }

  return (
    <ProfileContainer>
      <ProfileHeader>
        <ProfileImageContainer>
          <ProfileImage src={user.profileImage} alt={user.username} />
          <ProfileStatus />
        </ProfileImageContainer>
        <ProfileInfo>
          <ProfileUsername>{user.username}</ProfileUsername>
          <ProfileBio>{user.bio}</ProfileBio>
          <ProfileStats>
            <Stat>
              <h3>{user.posts}</h3>
              <p>Posts</p>
            </Stat>
            <Stat>
              <h3>{user.followers}</h3>
              <p>Followers</p>
            </Stat>
            <Stat>
              <h3>{user.following}</h3>
              <p>Following</p>
            </Stat>
          </ProfileStats>
          <EditProfileButton onClick={handleEditProfile}>Edit Profile</EditProfileButton>
        </ProfileInfo>
      </ProfileHeader>
      <PostGrid>
        {posts.map(post => (
          <PostThumbnail key={post.id}>
            <img src={post.imageUrl} alt="Post thumbnail" />
          </PostThumbnail>
        ))}
      </PostGrid>
    </ProfileContainer>
  );
};

export default Profile;

