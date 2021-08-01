import { Component, OnInit, ViewChild } from '@angular/core';
import { TiposShowComponent } from '../tipos-show/tipos-show.component';

@Component({
  selector: 'app-show-jazz-and-blues',
  templateUrl: './show-jazz-and-blues.component.html',
  styleUrls: ['./show-jazz-and-blues.component.scss']
})
export class ShowJazzAndBluesComponent implements OnInit {

  @ViewChild(TiposShowComponent)
  private tiposShowComponent: TiposShowComponent;


  constructor() {
    
   }

  ngOnInit(): void {
    
  }

  ngAfterViewInit() {
    this.tiposShowComponent.title = 'Jazz and Blues';
  }

}
