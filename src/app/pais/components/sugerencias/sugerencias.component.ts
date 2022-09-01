import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-sugerencias',
  templateUrl: './sugerencias.component.html',
  styles: [`
        li{ cursor: pointer; }
          
        `]
})
export class SugerenciasComponent implements OnInit {

 @Input()  mostrarSugerencias: boolean = false;
 @Input()  paisesSugeridos: Country[] = [];
 @Input()  termino: string = '';
 @Output() setTermino: EventEmitter< string > = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }


  buscarTermino( termino:string ){
    this.setTermino.emit( termino );
  }
}
