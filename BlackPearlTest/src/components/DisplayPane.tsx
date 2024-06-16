import '../App.css';
import Display from './Display';
import Edit from './Edit';
import { User } from './User';

interface DisplayPaneProps {
  selectedUser: User | null;
  onSave: (updatedUser: User) => void;
}

const DisplayPane: React.FC<DisplayPaneProps> = ({ selectedUser, onSave }) => {
  return (
    selectedUser ? (
      <div className="display-pane">
        <Edit selectedUser={selectedUser} onSave={onSave} />
        <Display selectedUser={selectedUser} />
      </div>
    ) : (
      <h1>Please select a person to show their profile</h1>
    )
  );
};

export default DisplayPane;
