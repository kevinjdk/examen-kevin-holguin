import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'examenP1';
  navItems: any[] = [];
  ngOnInit() {
    this.navItems = [
      {
        label: 'Inicio',
        icon: 'pi pi-home',
        routerLink: ['/home']
      },
      {
        label: 'About',
        icon: 'pi pi-th-large',
        routerLink: ['/about']
      },
      {
        label: 'Contacto',
        icon: 'pi pi-envelope',
        routerLink: ['/contact']
      },
      {
        label: 'Posts',
        icon: 'pi pi-list',
        routerLink: ['/posts']
      }
    ];
  }
}
