import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators'

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit, OnDestroy {

  constructor() { }

  sub!:Subscription;
  sub2!:Subscription;

  ngOnInit(): void {
    //this.sub = interval(1000).subscribe(numero => console.log(numero));

    const customInterval = new Observable(observer => {

      let count = 0;
      setInterval(() => {

        observer.next(count);//comunica alla callback del subscribe il valore inserito tra parentesi

        if(count > 30){
          observer.error('numero troppo elevato')//scatena un errore bloccante, oppure invia il dato alla callback di errore
        }

        if(count == 20){
          observer.complete();//completa l'observable, in modo positivo
        }

        count++;
      },1000)

    })

    this.sub2 = customInterval
    .pipe(
      filter((numero:any) => numero > 10),
      map((numero:any) => `Eseguito ${numero} volte`)
    )
    .subscribe(
      numero => console.log(numero),
      error => { throw new Error(error) },
      () => console.log('completo')
    );

  }

  ngOnDestroy(): void {
      //this.sub.unsubscribe();
      this.sub2.unsubscribe();
  }

}
