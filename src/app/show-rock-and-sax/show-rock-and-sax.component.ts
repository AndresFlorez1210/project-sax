import { Component, OnInit, ViewChild } from '@angular/core';
import { TiposShowComponent } from '../tipos-show/tipos-show.component';

@Component({
  selector: 'app-show-rock-and-sax',
  templateUrl: './show-rock-and-sax.component.html',
  styleUrls: ['./show-rock-and-sax.component.scss']
})
export class ShowRockAndSaxComponent implements OnInit {

  @ViewChild(TiposShowComponent)
  private tiposShowComponent: TiposShowComponent;


  constructor() {
    
   }

  ngOnInit(): void {
    
  }

  ngAfterViewInit() {
    this.tiposShowComponent.title = 'Rock and Sax';
  }

}
