import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent implements OnInit {

  termino:  string    = '';
  hayError: boolean   = false;
  capitales: Country[] =[];

  constructor( private paisService: PaisService ) { }

  ngOnInit(): void {
    

  }

  buscar( termino:string ){
    this.termino = termino;
    this.hayError = false;
    this.paisService.buscarCapital( this.termino )
    .subscribe( capitales =>{
      this.capitales = capitales;
      
    }, (err)=>{
      this.capitales = [];
      this.hayError = true;
    }
    
    )
  }

/*   sugerencias( termino:string ){
    this.hayError = false;
  }

 */

}
