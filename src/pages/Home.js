import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

const HomeLayout = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const FeedContainer = styled.div`
  flex: 2;
  margin-right: 20px;
`;

const SidebarContainer = styled.div`
  flex: 1;
  position: sticky;
  top: 80px;
  height: calc(100vh - 100px);
  overflow-y: auto;
`;
const Post = styled.div`
  background-color: white;
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  margin-bottom: 20px;
`;

const PostHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
`;

const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 10px;
`;

const Username = styled.span`
  font-weight: 600;
`;

const PostImage = styled.img`
  width: 100%;
  height: auto;
`;

const PostActions = styled.div`
  display: flex;
  padding: 8px 16px;
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  margin-right: 16px;
  cursor: pointer;
`;

const PostCaption = styled.p`
  padding: 0 16px;
  margin: 8px 0;
`;

const PostComments = styled.div`
  padding: 0 16px;
`;

const Comment = styled.p`
  margin: 4px 0;
`;

const FriendList = styled.div`
  background-color: white;
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  padding: 16px;
  margin-bottom: 20px;
`;

const FriendItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

const FriendName = styled.span`
  margin-left: 10px;
`;

const ChatButton = styled(Link)`
  background-color: #0095f6;
  color: white;
  padding: 8px 12px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 600;
  margin-left: auto;
`;
const Home = () => {
  const [posts, setPosts] = useState([]);
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    // Здесь будет вызов API для получения постов
    const fetchPosts = async () => {
      try {
        // const response = await axios.get('API_URL/posts');
        // setPosts(response.data);
        setPosts([
          {
            id: 1,
            username: 'john_doe',
            avatarUrl: 'https://i.pravatar.cc/150?img=1',
            imageUrl: 'https://source.unsplash.com/random/600x600?1',
            caption: 'Enjoying a beautiful day! ☀️',
            likes: 142,
            comments: [
              { username: 'jane_smith', text: 'Looks amazing!' },
              { username: 'mike123', text: 'Wish I was there!' },
            ],
          },
          {
            id: 2,
            username: 'travel_lover',
            avatarUrl: 'https://i.pravatar.cc/150?img=2',
            imageUrl: 'https://source.unsplash.com/random/600x600?2',
            caption: 'Adventure awaits! 🌄',
            likes: 253,
            comments: [
              { username: 'explorer99', text: 'What a view!' },
              { username: 'nature_fan', text: 'Breathtaking!' },
            ],
          },
        ]);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    // Здесь будет вызов API для получения списка друзей
    const fetchFriends = async () => {
      try {
        // const response = await axios.get('API_URL/friends');
        // setFriends(response.data);
        setFriends([
          { id: 1, username: 'best_friend', avatarUrl: 'https://i.pravatar.cc/150?img=3' },
          { id: 2, username: 'college_buddy', avatarUrl: 'https://i.pravatar.cc/150?img=4' },
          { id: 3, username: 'work_mate', avatarUrl: 'https://i.pravatar.cc/150?img=5' },
        ]);
      } catch (error) {
        console.error('Error fetching friends:', error);
      }
    };

    fetchPosts();
    fetchFriends();
  }, []);
  return (
    <HomeLayout>
      <FeedContainer>
        {posts.map(post => (
          <Post key={post.id}>
            <PostHeader>
              <Avatar src={post.avatarUrl} alt={post.username} />
              <Username>{post.username}</Username>
            </PostHeader>
            <PostImage src={post.imageUrl} alt="Post" />
            <PostActions>
              <ActionButton>❤️</ActionButton>
              <ActionButton>💬</ActionButton>
              <ActionButton>🚀</ActionButton>
            </PostActions>
            <PostCaption>
              <strong>{post.username}</strong> {post.caption}
            </PostCaption>
            <PostComments>
              {post.comments.map((comment, index) => (
                <Comment key={index}>
                  <strong>{comment.username}</strong> {comment.text}
                </Comment>
              ))}
            </PostComments>
          </Post>
        ))}
      </FeedContainer>
      <SidebarContainer>
        <FriendList>
          <h3>Friends</h3>
          {friends.map(friend => (
            <FriendItem key={friend.id}>
              <Avatar src={friend.avatarUrl} alt={friend.username} />
              <FriendName>{friend.username}</FriendName>
              <ChatButton to={`/chat/${friend.id}`}>Chat</ChatButton>
            </FriendItem>
          ))}
        </FriendList>
        <Link to="/profile">
          <button>View Profile</button>
        </Link>
      </SidebarContainer>
    </HomeLayout>
  );
};

export default Home;

