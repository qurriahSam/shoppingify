import { useState } from 'react';
import './drawer.css';
import List from '../../components/ui/Drawer/List';
import AddNewItem from '../../components/ui/Drawer/AddNewItem';

export default function Drawer() {
  const [newItem, setNewItemDisp] = useState(false);

  const toggleNewItem = () => {
    setNewItemDisp(!newItem);
  };

  return (
    <>
      {newItem ? (
        <AddNewItem toggleNewItem={toggleNewItem} />
      ) : (
        <List toggleNewItem={toggleNewItem} />
      )}
    </>
  );
}
