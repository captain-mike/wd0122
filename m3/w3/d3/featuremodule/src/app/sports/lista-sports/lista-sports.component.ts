import { Component, OnInit } from '@angular/core';
import { Sport } from '../sport';
import { SportService } from '../sport.service';

@Component({
  selector: 'app-lista-sports',
  templateUrl: './lista-sports.component.html',
  styleUrls: ['./lista-sports.component.scss']
})
export class ListaSportsComponent implements OnInit {

  constructor(private sportSrv:SportService) { }

  sports:Sport[] = [];

  ngOnInit(): void {

    this.sports = this.sportSrv.sports

  }

}
