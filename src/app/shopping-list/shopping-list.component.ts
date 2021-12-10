import { Component, OnInit } from '@angular/core';

import CartItem from '../shared/cart-item.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  cartItems: CartItem[] = [
    new CartItem('Apples', 5),
    new CartItem('Tomatoes', 10)
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
