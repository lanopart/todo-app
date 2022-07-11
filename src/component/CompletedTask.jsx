import './CompletedTask.css'

function CompletedTask({ completedItemList, updateCompletedItemList, itemList, updateItemList }) {

  
  const noCompletedTask = () => {
    if (itemList.length === 0) {
      return <h3>No Completed task</h3>;
    } else {
      return <h3>Completed task</h3>;
    }
  };

  const deleteItemFromList = (key) => {
    const deleteList = itemList.filter(doneObj => {
        return doneObj.key !== key;
    });
    window.alert("Are you sure you want to delete?")
    updateItemList(deleteList);
};


  return (
    <div className="completedTask-wrapper">
        {noCompletedTask()}
        <div className="Item-wrapper">
         
        {itemList.filter((doneObj) => {
        if (doneObj.completed === true){
          return doneObj
        }
      })
      .map((doneObj) => {
          return (
            <div key={doneObj.key} className="Item">
              <p>{doneObj.item}</p>
              <button>
              <img src="https://www.clipartmax.com/png/full/387-3877752_free-trash-can-icon-free-trash-can-icon.png"
              onClick={() => deleteItemFromList(doneObj.key)}/></button>
            </div>
          );
        })}
      </div>
    </div>
  )
}



export default CompletedTask;