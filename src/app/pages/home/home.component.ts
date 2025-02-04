import { Component } from '@angular/core';
import { ProductListComponent } from '../products/product-list/product-list.component';

@Component({
  selector: 'app-home',
  imports: [ProductListComponent],
  template: `
    <section align="center" class="hero-section">
      <h2>Bienvenue sur ngDuka</h2>
      <h3>Une boutique en ligne pour le demo Http Client en Angular</h3>
      <input placeholder="Recherche dans ngDuka" type="text" />
    </section>
    <app-product-list
      productTitle="Electroniques"
      query="electronics"
      [queryLimitCount]="4"
    />
    <app-product-list
      productTitle="Bijoux"
      query="jewelery"
      [queryLimitCount]="4"
    />
    <app-product-list
      productTitle="Vetements pour hommes"
      query="men's clothing"
      [queryLimitCount]="4"
    />
    <app-product-list
      productTitle="Vetements pour femmes"
      query="women's clothing"
      [queryLimitCount]="4"
    />
    <br /><br />
  `,
  styles: `
  .hero-section{
    background: linear-gradient(to right, #FF7F7F, #FFB6C1);
    padding: 2rem;
  }
  input{
    width: 50vw;
    padding: 0.5rem;
    font-size: 1rem;
  }
  `,
})
export default class HomeComponent {}
