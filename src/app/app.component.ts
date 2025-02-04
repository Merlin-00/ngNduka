import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./pages/shared/footer.component";
import { ToolbarComponent } from "./pages/shared/toolbar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, ToolbarComponent],
  template: `
  <app-toolbar/>
    <router-outlet />
    <app-footer/>
  `,
  styles: [],
})
export class AppComponent {
  title = 'ngNduka';
}
