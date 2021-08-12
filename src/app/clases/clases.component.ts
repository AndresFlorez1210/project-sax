import { Component, OnInit, ViewChild } from '@angular/core';
import { TiposShowComponent } from '../tipos-show/tipos-show.component';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.scss']
})
export class ClasesComponent implements OnInit {

  @ViewChild(TiposShowComponent)
  private tiposShowComponent: TiposShowComponent;


  constructor() {
    
   }

  ngOnInit(): void {
    
  }

  ngAfterViewInit() {
    this.tiposShowComponent.title = 'Clases';
    this.tiposShowComponent.classImage = 'conainer-show-component__img__clases';
  }

}
