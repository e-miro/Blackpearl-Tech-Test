import React from 'react';
import { User } from './User';
import '../App.css';

interface EditProps {
  selectedUser: User;
  onSave: (updatedUser: User) => void;
}

const Edit: React.FC<EditProps> = ({ selectedUser, onSave }) => {

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedUser = { ...selectedUser, [name]: value };
    onSave(updatedUser);
  };

  return (
    <div className="edit">
      <h2>{selectedUser.name}</h2>
      <div className='input'>
        <label htmlFor="address1">Address Line 1:</label>
        <input
          type="text"
          id="address1"
          name="address1"
          value={selectedUser.address1}
          onChange={handleInputChange}
        />
      </div>
      <div className='input'>
        <label htmlFor="address2">Address Line 2:</label>
        <input
          type="text"
          id="address2"
          name="address2"
          value={selectedUser.address2}
          onChange={handleInputChange}
        />
      </div>
      <div className='input'>
        <label htmlFor="phNum">Phone Number:</label>
        <input
          type="text"
          id="phNum"
          name="phNum"
          value={selectedUser.phNum}
          onChange={handleInputChange}
        />
      </div>
      <div className='input'>
        <label htmlFor="mobNum">Mobile Number:</label>
        <input
          type="text"
          id="mobNum"
          name="mobNum"
          value={selectedUser.mobNum}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default Edit;
