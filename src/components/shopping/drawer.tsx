import { useState } from 'react';
import './drawer.css';
import List from './list';
import AddNewItem from './addNewItem';

export default function Drawer() {
  const [newItem, setNewItemDisp] = useState(false);

  const toggleNewItem = () => {
    console.log(newItem);

    setNewItemDisp(!newItem);
  };

  return <>{newItem ? <AddNewItem /> : <List toggleNewItem={toggleNewItem} />}</>;
}
