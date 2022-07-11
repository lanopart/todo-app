import './PendingTask.css';
import React from 'react';

const PendingTask = ({itemList, updateItemList, completedItemList, updateCompletedItemList}) => {


  const updateItemToList = (completed) => {
  updateCompletedItemList(itemList.filter(itemObj => itemObj.completed === false));
  updateItemList(itemList);
  };

  const noPendingTask = () => {
    if (completedItemList.length === 0) {
      return <h3>No Pending task</h3>;
    } else {
      return <h3>Pending Task</h3>
    }
  };

  return (
    <div className="pending">
      {noPendingTask()}
      <div className="Item-wrapper">
        {completedItemList.map((itemObj) => {
          return (
            <div key={itemObj.key} className="Item">
              <p>{itemObj.item}</p>
              <button>
                <img src="https://cutewallpaper.org/24/checkmark-icon-png/12-months-blue-check-mark-icon-png-image-with-transparent-background--toppng.png"
               onClick={() => updateItemToList(itemObj.completed = true)}/></button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PendingTask;
