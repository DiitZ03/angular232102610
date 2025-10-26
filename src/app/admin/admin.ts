import { Component } from '@angular/core';
import { Header } from "../header/header";
import { Content } from "../content/content";
import { Sidebar } from '../sidebar/sidebar';
import { RouterModule } from '@angular/router';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-admin',
  imports: [Header, Sidebar, Content, Footer, RouterModule],
  templateUrl: './admin.html',
  styleUrl: './admin.css'
})
export class Admin {

}
