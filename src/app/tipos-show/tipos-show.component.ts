import { Component, OnInit } from '@angular/core';
import * as data from '../../assets/json/services.json';
import { Service } from './models/services.model';

@Component({
  selector: 'app-tipos-show',
  templateUrl: './tipos-show.component.html',
  styleUrls: ['./tipos-show.component.scss']
})
export class TiposShowComponent implements OnInit {

  urlImg = '';
  title = '';
  podcast = ''
  textBody = '';
  classImage = '';

  constructor() { }

  async ngOnInit(): Promise<void> {
    const serviceList = await this.getService();
    await serviceList.map((data) => {
      if(data.title === this.title){
        this.urlImg = data.urlImage;
        this.podcast = data.podcast;
        this.textBody = data.textBody;
      }
    });
  }

  getService(): Array<Service> {
    return (data as any).Services;
}

}
