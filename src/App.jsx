
import './App.css'
import { Person } from './Person'
import Button from  './Button';
import { Header } from './Header';
import { List } from './List';

const App = () => {
  const handleClick = () => {
    alert('hi button was clicked');
    // Perform any desired actions here
  };

  const listItems = ['Item 1', 'Item 2', 'Item 3'];

  return (
   <> 
        <Header title="React Assignment"/>
        <p><Person name="shivam" age="21"/></p>
      <div> 
      <Button text="Click-here" onClick={handleClick} /> 
    </div>
    <div>
       <List items={listItems} />
    </div>
      
    </>
  );
};

export default App;