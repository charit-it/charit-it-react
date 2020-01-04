import React from "react";
import axios from "axios";
import Items from "./Items";

class Main extends React.Component {
  state = {
    item: []
  }
  componentDidMount() {
    axios.get('https://j6vkylfab7.execute-api.eu-west-2.amazonaws.com/dev/item')
      .then((res) => {
        this.setState({
          item: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }
  render() {
    const children = this.state.item.filter(i => i.itemType === 'Children');
    const electronics = this.state.item.filter(i => i.itemType === 'Electronics');
    const men = this.state.item.filter(i => i.itemType === "Men");
    const women = this.state.item.filter(i => i.itemType === "Women");

    return (
      <div className="container">
          <div>
            <h2 className="title-row">Clothing and Accessories</h2>
            <h4 className="title-row title-sub" id="children">Children</h4>
            <div className="cards-row">
              {children.map(itemC => {
                return <Items key={itemC.itemId} itemUrl={itemC.image_URL} itemName={itemC.item_name} itemDesc={itemC.item_description} itemPri={itemC.item_price} id={itemC.itemId} shopName={itemC.shop_name} shopAdr={itemC.shop_address} shopPho={itemC.shop_phone_number} shopEm={itemC.email} />
              })}
            </div>
          </div>
          <div>
            <h4 className="title-row title-sub" id="men">Men</h4>
            <div className="row cards-row">
              {men.map(itemM => {
                return <Items key={itemM.itemId} itemUrl={itemM.image_URL} itemName={itemM.item_name} itemDesc={itemM.item_description} itemPri={itemM.item_price} id={itemM.itemId} shopName={itemM.shop_name} shopAdr={itemM.shop_address} shopPho={itemM.shop_phone_number} shopEm={itemM.email} />
              })}
            </div>
          </div>
          <div>
            <h4 className="title-row title-sub" id="women">Women</h4>
            <div className="row cards-row">
              {women.map(itemW => {
                return <Items key={itemW.itemId} itemUrl={itemW.image_URL} itemName={itemW.item_name} itemDesc={itemW.item_description} itemPri={itemW.item_price} id={itemW.itemId} shopName={itemW.shop_name} shopAdr={itemW.shop_address} shopPho={itemW.shop_phone_number} shopEm={itemW.email} />
              })}
            </div>
          </div>
          <div>
            <h2 className="title-row" id="electronics">Electronics</h2>
            <div className="row cards-row">
              {electronics.map(itemE => {
                return <Items key={itemE.itemId} itemUrl={itemE.image_URL} itemName={itemE.item_name} itemDesc={itemE.item_description} itemPri={itemE.item_price} id={itemE.itemId} shopName={itemE.shop_name} shopAdr={itemE.shop_address} shopPho={itemE.shop_phone_number} shopEm={itemE.email} />
              })}
            </div>
          </div>
        </div>
    );
  }
}

export default Main;