import {
  Component,
  inject,
  input,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';
import { Product } from '../../../core/models/product.model';
import { ApiService } from '../../../core/services/api.service';
import { Router, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-product-list',
  imports: [RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent implements OnInit, OnDestroy {
  products?: Product[];
  api = inject(ApiService);
  productTitle = input.required<string>();
  query = input.required<string>();
  queryLimitCount = input<number>();
  productSub?: Subscription;
  loadind = signal(true);
  private route = inject(Router);
  private title = inject(Title);

  ngOnInit(): void {
    const products$ =
      this.query() === 'allProducts'
        ? this.api.getPro()
        : this.api.getProduct(this.query(), this.queryLimitCount());

    this.productSub = products$.subscribe((products) => {
      this.products = products;
      this.loadind.set(false);
      if (this.route.url.includes('products')) {
        this.title.setTitle(`${products[0].category} - ngDuka`);
      }
    });
  }
  ngOnDestroy(): void {
    this.productSub?.unsubscribe();
  }
}
