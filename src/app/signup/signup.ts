import { Component, Renderer2 } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [RouterModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class Signup {
  constructor(private renderer: Renderer2) {
    this.renderer.addClass(document.body, 'signup-page');

    this.renderer.removeClass(document.body, 'sidebar-mini');
    this.renderer.removeClass(document.body, 'layout-fixed');

    this.renderer.setAttribute(document.body, 'style', "min-height: 466px;");
  }
}
