import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  API = 'https://fakestoreapi.com';
  http = inject(HttpClient);
  countProduct = signal(0);

  getProduct(category: string, limitCount?: number) {
    const queryParams = limitCount ? `?limit=${limitCount}` : '';
    return this.http.get<Product[]>(
      `${this.API}/products/category/${category}${queryParams}`
    );
  }
  getPro = () => this.http.get<Product[]>(`${this.API}/products/`);

  getProduit = (id: number) =>
    this.http.get<Product>(`${this.API}/products/+${id}`);
  AddNewProduct(product: Product) {
    return this.http.post<Product>(`${this.API}/products`, product);
  }

  editProduct(product: Product) {
    return this.http.put<Product>(
      `${this.API}/products/${product.id}`,
      product
    );
  }
  updateProductTile(title: string, id: string) {
    return this.http.patch<Product>(`${this.API}/products/${id}`, title);
  }
  deleteProduct(id: string) {
    return this.http.delete<Product>(`${this.API}/products/+${id}`);
  }
}
