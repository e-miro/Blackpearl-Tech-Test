import React, { useEffect, useState } from 'react';
import { User } from './User';
import '../App.css';

interface EditProps {
  selectedUser: User;
  onSave: (updatedUser: User) => void;
}

const Edit: React.FC<EditProps> = ({ selectedUser, onSave }) => {
  const [editableUser, setEditableUser] = useState<User>(selectedUser);

  useEffect(() => {
    setEditableUser(selectedUser);
  }, [selectedUser]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedUser = { ...editableUser, [name]: value };
    setEditableUser(updatedUser);
    onSave(updatedUser);
  };

  return (
    <div className="edit">
      <h2>{editableUser.name}</h2>
      <div className='input'>
        <label htmlFor="address1">Address Line 1:</label>
        <input
          type="text"
          id="address1"
          name="address1"
          value={editableUser.address1}
          onChange={handleInputChange}
        />
      </div>
      <div className='input'>
        <label htmlFor="address2">Address Line 2:</label>
        <input
          type="text"
          id="address2"
          name="address2"
          value={editableUser.address2}
          onChange={handleInputChange}
        />
      </div>
      <div className='input'>
        <label htmlFor="phNum">Phone Number:</label>
        <input
          type="text"
          id="phNum"
          name="phNum"
          value={editableUser.phNum}
          onChange={handleInputChange}
        />
      </div>
      <div className='input'>
        <label htmlFor="mobNum">Mobile Number:</label>
        <input
          type="text"
          id="mobNum"
          name="mobNum"
          value={editableUser.mobNum}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default Edit;
