import { Injectable } from '@angular/core';
import { Cart } from '../service/models/Cart';
import { Foods } from '../shared/models/food';
import { CartItem } from '../service/models/CartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  getCartObservable() {
    throw new Error('Method not implemented.');
  }
  private cart:Cart = new Cart();
  addToCart(food:Foods):void{
    let cartItem = this.cart.items.find(items => items.food.id === food.id)
    if(cartItem){
      this.changeQuantity(food.id , cartItem.quantity + 1)
      return;
    }
    this.cart.items.push(new CartItem(food));
  }
  removeFromCart(foodId:number):void{
    this.cart.items = this.cart.items.filter(items => items.food.id !=foodId)
  }
  changeQuantity(quantity:number, foodId:number){
    let cartItem = this.cart.items.find(items => items.food.id === foodId);
    if(!cartItem) return;
    cartItem.quantity = quantity;
  }
  getCart():Cart{
    return this.cart;
  }
}
