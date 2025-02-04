import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  template: `
    <footer>
      <div class="footer-container">
        <div class="left-container">
          <div>
            <p><b>PRODUITS</b></p>
            <a routerLink="/products/electronics">Electroniques</a>
            <a routerLink="/products/jewelery">Bijoux</a>
            <a routerLink="/products/men's clothing">Vetements pour hommes</a>
            <a routerLink="/products/women:s clothing">Vetements pour femmes</a>
          </div>
          <div>
            <p><b>LIENS</b></p>
            <a
              href="https://x.com/Merlin_Lubambo?t=w-wI13_Zlg9XkQ-MNZJJFw&s=08"
              target="_blank"
              >Merlin X</a
            >
            <a href="https://github.com/Merlin-00/Merlin-00.git" target="_blank"
              >Merlin github</a
            >
            <a
              href="https://www.linkedin.com/in/merlin-lubambo-97b2b6336?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              >Merlin linkedln</a
            >
          </div>
        </div>
        <p>
          <b>ngDuka {{ date.getFullYear() }}</b
          ><br />
          Developpé par Merlin Lubambo, ref. Amani Bisimwa | Malakisi
        </p>
      </div>
    </footer>
  `,
  styles: `
  footer{
    background: #e4e4e4;
  }
  .footer-container{
    display: flex;
    justify-content: space-between;
    align-items: end;
    padding: 2rem;
    flex-wrap: wrap;
  }
  .left-container{
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;

    a{
      display: block;
      margin: 0.5rem 0;
    }
  }
  `,
})
export class FooterComponent {
  date = new Date();
}
