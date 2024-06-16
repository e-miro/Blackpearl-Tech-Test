import React from 'react';
import './UserList.css';
import { User } from './User';

interface UserListProps {
  users: User[];
  selectedUser: User | null;
  onUserClick: (user: User) => void;
}

const UserList: React.FC<UserListProps> = ({ users, selectedUser, onUserClick }) => {
  return (
    <div className="user-list">
      <ul>
        {users.map((user) => (
          <li key={user.id} onClick={() => onUserClick(user)} className={selectedUser === user ? 'selected' : ''}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
