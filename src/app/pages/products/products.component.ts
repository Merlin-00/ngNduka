import { Component, input } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-products',
  imports: [ProductListComponent],
  template: `
    <main class="max-width">
      <app-product-list [productTitle]="category()" [query]="category()" />
      <br />
      <app-product-list
        productTitle="vous aimerez peut-etre aussi ceci"
        [query]="'allProducts'"
      />
      <br /><br />
    </main>
  `,
  styles: ``,
})
export default class ProductsComponent {
  category = input('category');
}
