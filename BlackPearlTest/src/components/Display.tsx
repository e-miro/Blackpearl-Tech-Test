import '../App.css'
import React from 'react';
import blackpearl from '../assets/blackpearl.png'
import { User } from './User';

interface DisplayProps {
    selectedUser: User | null;
  }

  const Display: React.FC<DisplayProps> = ({ selectedUser }) => {
    return(
        <div className='display'>
            <h2>Signature Preview</h2>
            <h3><strong>{selectedUser?.name}</strong></h3>
            <p><strong>Address:</strong> {selectedUser?.address1}, {selectedUser?.address2}</p>
            <p><strong>Phone:</strong> {selectedUser?.phNum}</p>
            <p><strong>Mobile:</strong> {selectedUser?.mobNum}</p>
            <p>{selectedUser?.banner ? <img src={blackpearl}/> : 'No banner please'}</p>
          </div>
    );
}

export default Display