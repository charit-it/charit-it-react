import React from 'react'
import Main from "./Main";
import Header from "./Header";
import "./App.css";

class App extends React.Component {
  // addItem = (item) =>{
  //   const newItem = {
  //     userId: 1,
  //     itemURL: item.image_url,
  //     itemType: item.itemtype,
  //     itemName: item.item_name,
  //     itemDesc: item.item_description,
  //     itemPri: item.item_price
  //   }
  //   axios.post('https://j6vkylfab7.execute-api.eu-west-2.amazonaws.com/dev/item', newItem).then((res) => {
  //     newItem.itemId = res.data.insertId;

  //   })
  // }
  // deleteItem = id => {
  //   const url = "https://j6vkylfab7.execute-api.eu-west-2.amazonaws.com/dev/item";
  //   axios.delete(`${url}/${id}`).then((res) => {
  //     const filterItem = this.state.item.filter(item => {
  //       return item.itemId !== id;
  //     });
  //     this.setState({
  //       item: filterItem
  //     });
  //   }).catch((error) => {
  //     console.log(error);
  //   });
  // } 
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;