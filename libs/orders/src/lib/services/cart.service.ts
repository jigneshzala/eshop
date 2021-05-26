import { Injectable } from '@angular/core';
export const CART_KEY = 'cart';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  initCartLocalStorage() {
    const intialCart = {
      items: [],
    };
    const intialCartJson = JSON.stringify(intialCart);
    localStorage.setItem(CART_KEY, intialCartJson);
  }
}
