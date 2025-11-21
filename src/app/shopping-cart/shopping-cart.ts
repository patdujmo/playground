import { Component, computed, signal } from '@angular/core';
import { Product } from './product-model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shopping-cart',
  imports: [CommonModule],
  templateUrl: './shopping-cart.html',
  styleUrl: './shopping-cart.scss',
})
export class ShoppingCart {

  cart = signal<Product[]>([]);

  totalPrice = computed(() => 
    this.cart().reduce((sum, p) => sum + p.price, 0)
  );

  counter = computed(() => this.cart().length);

  isVisible = computed(() => this.cart().length > 0);

  addItem(product: Product) {
    this.cart.update(c => [...c, product]);
  }

  clear() {
    this.cart.set([]);
  }

}
