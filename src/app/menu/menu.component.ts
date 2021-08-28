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
    this.stateToggle = !this.stateToggle;
    this.showClass = this.stateToggle ? 'full-menu' : '';
    this.stateToggleShow = false;
    const div = document.getElementById('back-menu');
    if(this.stateToggle){
      div.classList.add('background-menu');
    }else{
      div.classList.remove('background-menu'); 
    }
  }

  toggleShow(){
    this.stateToggleShow = !this.stateToggleShow;
    this.showClass = this.stateToggleShow ? 'full-menu-show' : 'full-menu';
  }
}
