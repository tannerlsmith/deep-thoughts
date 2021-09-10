import React from 'react';
import FriendList from '../components/FriendList';

const Profile = () => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(QUERY_USER, {
    variables: { username: userParam }
  });

  const user = data?.user || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex-row justify-space-between mb-3">
      <div className="col-12 mb-3 col-lg-8">
        <ThoughtList thoughts={user.thoughts} title={`${user.username}'s thoughts...`} />
      </div>

      <div className="col-12 col-lg-3 mb-3">
        <FriendList
          username={user.username}
          friendCount={user.friendCount}
          friends={user.friends}
        />
      </div>
    </div>
  );
};

export default Profile;
