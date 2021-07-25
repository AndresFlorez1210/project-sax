import * as data from '../../assets/json/podcast.json';
import { Component, OnInit } from '@angular/core';
import  { Podcast } from './models/podcast.model'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-podcast',
  templateUrl: './podcast.component.html',
  styleUrls: ['./podcast.component.scss']
})
export class PodcastComponent implements OnInit {

  podcastList : Podcast[];
  podcastListSrc : String[] = [];
  
  constructor() { }


  ngOnInit(): void {

     this.podcastList  = this.getPodcast();

     this.podcastList.forEach(podcast =>{
       this.podcastListSrc.push(podcast.src);
       console.log(podcast.src)
     })

    console.log('prueba '+this.podcastList.length);
  }
  
  getPodcast(): Array<Podcast> {
      return (data as any).Podcast;
  }

}
