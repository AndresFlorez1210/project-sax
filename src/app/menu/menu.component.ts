import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public stateToggle = false;
  public stateToggleShow = false;
  public showClass = '';

  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    console.log('ENTRA 3');
    this.stateToggle = !this.stateToggle;
    this.showClass = this.stateToggle ? 'full-menu' : '';
    this.stateToggleShow = false;
  }

  toggleShow(){
    console.log('ENTRA ',this.showClass);
    this.stateToggleShow = !this.stateToggleShow;
    this.showClass = this.stateToggleShow ? 'full-menu-show' : 'full-menu';
    console.log('ENTRA2 ',this.showClass);
  }
}
