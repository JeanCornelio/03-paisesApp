import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';
import { tap } from 'rxjs/operators';
@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [``]
})
export class PorPaisComponent implements OnInit {

  termino:  string    = '';
  hayError: boolean   = false;
  paises:   Country[] = [];
  paisesSugeridos: Country[] = [];
  mostrarSugerencias: boolean = false
  
  constructor( private paisService: PaisService ) { }
  
  ngOnInit(): void {
    if(localStorage.getItem('paises')){
      this.paises = JSON.parse(localStorage.getItem('paises')!);
    }

  }

  
  buscar( termino:string ): void{
    this.termino  = termino;
    this.mostrarSugerencias = false;
    this.hayError = false;
    this.paisService.buscarPais( this.termino )
        .subscribe( ( paises )=>{
          this.paises = paises;
          localStorage.setItem( 'paises', JSON.stringify( this.paises  ))
          
        }, (err)=>{
          this.hayError = true;
          this.paises = [];
        }
        )
    
  }

  sugerencias( termino: string ){
    this.mostrarSugerencias = true
    this.hayError = false;
    this.termino  = termino;
    this.paisService.buscarPais( termino ).pipe(
     
    )
      .subscribe( paises => {
        this.paisesSugeridos = paises.splice(0,5)
      },(err)=>{
        this.paisesSugeridos = [];
      }
       )
  }

  buscarTermino( termino:string ){
    this.buscar( termino )

  }


  clearLocale(){
    localStorage.setItem('paises', JSON.stringify([]))
    this.paises = [];
    
  }

}
