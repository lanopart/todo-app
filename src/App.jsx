import { useState, useEffect } from 'react';
import './App.css';
import CompletedTask from './component/CompletedTask';
import PendingTask from './component/PendingTask';

function App() {
  const [currentItem, setCurrentItem] = useState("");
  const [itemList, updateItemList] = useState([]);
  const [completedItemList, updateCompletedItemList] = useState([]);


  const onChangeHandler = (event) => {
    setCurrentItem(event.target.value);
  };

  const addItemsToList = () => {
    updateItemList([...itemList, { item: currentItem, completed: false, key: Math.random() }]);
    setCurrentItem("");
  };

  useEffect(() => { 
    updateCompletedItemList(itemList.filter(item => item.completed === false)
    )
  }, [itemList]);


  return (
    <div className="App">
      <header className="App-header">
        <div className="Wrapper">
          <h1>What's your plan for today?</h1>
          <div className="Input-wrapper">
            <input
              placeholder="Add task here"
              value={currentItem}
              onChange={onChangeHandler}
            />
          </div>
          <div className="Button-wrapper">
            <button id='add-button'>
              <img src="https://p7.hiclipart.com/preview/78/893/200/royalty-free-stock-photography-computer-icons-clip-art-add-to-cart-button-thumbnail.jpg" 
              id="add-icon" onClick={addItemsToList}/>
            </button>
          </div>
        </div>
        <PendingTask itemList={itemList} updateItemList={updateItemList} completedItemList={completedItemList} 
        updateCompletedItemList={updateCompletedItemList} />
        <CompletedTask itemList={itemList} updateItemList={updateItemList} completedItemList={completedItemList} 
        updateCompletedItemList={updateCompletedItemList} />
      </header>
    </div>
  );
}

export default App;
