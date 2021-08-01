import { Component, OnInit, ViewChild } from '@angular/core';
import { TiposShowComponent } from '../tipos-show/tipos-show.component';

@Component({
  selector: 'app-show-personalizado',
  templateUrl: './show-personalizado.component.html',
  styleUrls: ['./show-personalizado.component.scss']
})
export class ShowPersonalizadoComponent implements OnInit {

  @ViewChild(TiposShowComponent)
  private tiposShowComponent: TiposShowComponent;


  constructor() {
    
   }

  ngOnInit(): void {
    
  }

  ngAfterViewInit() {
    this.tiposShowComponent.title = 'Personalizado';
  }

}
