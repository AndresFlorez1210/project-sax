import { Component, OnInit, ViewChild } from '@angular/core';
import { TiposShowComponent } from '../tipos-show/tipos-show.component';

@Component({
  selector: 'app-show-principal',
  templateUrl: './show-principal.component.html',
  styleUrls: ['./show-principal.component.scss']
})
export class ShowPrincipalComponent implements OnInit {

  @ViewChild(TiposShowComponent)
  private tiposShowComponent: TiposShowComponent;


  constructor() {
    
   }

  ngOnInit(): void {
    
  }

  ngAfterViewInit() {
    this.tiposShowComponent.title = 'Principal';
    this.tiposShowComponent.classImage = 'conainer-show-component__img__principal';
  }
}
