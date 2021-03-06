/* eslint-disable react/jsx-one-expression-per-line */
import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import NavBar from './NavBar'
import { store } from "../../store/index";
import CartProduct from './CartProduct';
import ButtonGeneric from '../containers/ButtonGeneric';
import { checkCitizen, checkBusiness } from '../../auxiliaryFunctions';


function printProduct(product) {
  return(
    <CartProduct key={product[6]} keyProd={product[6]} title={product[0]} quantity={product[1]} price={product[2]} VAT={product[3]} sellerName={product[4]} sellerVATNumber={product[5]} seller={product[7]} description={product[8]} />
  )
}

class Cart extends Component {

  render() {
    if(!(checkCitizen()||checkBusiness())){window.location.href = "/"}
    let productsList = store.getState().cart;
    let totalProducts = productsList.length
    let title
    let quantity
    let price
    let VAT
    let sellerName
    let sellerVATNumber
    let keyProd
    let product
    let description
    let productArray = []
    let totalPrice = 0
    let seller
    if(store.getState().logged === false){window.location.href = "/"}
    for(var i=0; i<totalProducts; i++){
      title = productsList[i].title
      quantity = productsList[i].quantity
      price = productsList[i].price
      VAT = productsList[i].VAT
      sellerName = productsList[i].sellerName
      sellerVATNumber = productsList[i].sellerVATNumber
      keyProd = productsList[i].keyProd
      seller = productsList[i].seller
      totalPrice += price*quantity
      description = productsList[i].description
      product = [title, quantity, price, VAT, sellerName, sellerVATNumber, keyProd, seller, description]
      productArray[i] = product;
    }
    return (
      <div>
        <NavBar />
        <h3>CART</h3>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <p>Total price: CC {(Math.round(totalPrice * 100) / 100)}</p>
            </div>
            <div className="col-sm-12">
              { totalProducts===0 ? <NavLink className="nav-item nav-link" to="/errorcheckout"><ButtonGeneric text="Checkout" /></NavLink> : <NavLink className="nav-item nav-link" to="/checkout"><ButtonGeneric text="Checkout" /></NavLink> }
            </div>
            {productArray.map(i => printProduct(i))}
          </div>
        </div>
      </div>
    )
  }
}
export default Cart;
