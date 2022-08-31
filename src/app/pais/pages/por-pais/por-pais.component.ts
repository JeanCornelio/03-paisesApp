import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  termino:  string    = '';
  hayError: boolean   = false;
  paises:   Country[] = [];

  
  constructor( private paisService: PaisService ) { }

  buscar( termino:string ): void{
    this.termino  = termino;
    this.hayError = false;
    this.paisService.buscarPais( this.termino )
        .subscribe( ( paises )=>{
          this.paises = paises;
          console.log(paises)
          
        }, (err)=>{
          this.hayError = true;
          this.paises = [];
          console.log(err);
        }
        )
    
  }

  sugerencias( termino: string ){
    console.log(termino)
    this.hayError = false;
  }

}
