import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import UserList from './components/UserList';
import DisplayPane from './components/DisplayPane';
import Users, { User } from './components/User';

function App() {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [userList, setUserList] = useState<User[]>(Users);

  const handleUserClick = (user: User) => {
    setSelectedUser(user);
  };

  const handleSaveUser = (updatedUser: User) => {
    setUserList(prevUserList => prevUserList.map(user =>
      user.id === updatedUser.id ? updatedUser : user
    ));
    setSelectedUser(updatedUser);
  };

  return (
    <div className="layout">
      <Header />
      <div className='mainContent'>
        <UserList users={userList} selectedUser={selectedUser} onUserClick={handleUserClick} />
        <DisplayPane selectedUser={selectedUser} onSave={handleSaveUser} />
      </div>
    </div>
  );
}

export default App;
