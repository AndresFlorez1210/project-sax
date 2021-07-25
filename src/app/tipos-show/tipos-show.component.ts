import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipos-show',
  templateUrl: './tipos-show.component.html',
  styleUrls: ['./tipos-show.component.scss']
})
export class TiposShowComponent implements OnInit {

  public urlImg = '../../assets/img/tipos-show/show-personalizado.jpg';
  title = 'Personalizado';
  podcast = 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1026194413&color=%23d6b8a6&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true'
  textBody = 'Organiza tu Set List acorde a tus preferencias con base en los shows de AlexCasaxMusic. <br><br>'+
          '<strong>Music World Academy</strong> <br><br>'+
          '<strong>Motivación, constancia y resultados.</strong><br><br>'+
          'Music World Academy, es una academia independiente fundada por profesionales en la música, que busca compartir de manera eficaz, eficiente y profesional sus conocimientos en esta área artística.<br>'+
          'La academia ofrece distintos planes que se adecuan perfectamente a tus necesidades considerando  aspectos tales como: tiempo, dinero, idioma, ubicación, preferencias de métodos e intereses puntuales para con la música.<br>'+
          '<br>------Cuéntanos qué instrumento te gustaría aprender, o qué área de la música te gustaría fortalecer. Te contactaremos lo más pronto posible junto con el maestro encargado del área.';

  constructor() { }

  ngOnInit(): void {
  }

}
