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
  capitales: Country[] = [];
  capitalesSugeridas: Country[] = [];
  mostrarSugerencias: boolean = false;



  constructor( private paisService: PaisService ) { }

  ngOnInit(): void {

    if(localStorage.getItem('capitales')){
      this.capitales = JSON.parse(localStorage.getItem('capitales')!);
    }

  }

  buscar( termino:string ){
    this.termino = termino;
    this.hayError = false;
    this.mostrarSugerencias= false;
    this.paisService.buscarCapital( this.termino )
    .subscribe( capitales =>{
      this.capitales = capitales;
      localStorage.setItem('capitales', JSON.stringify(this.capitales));
      
    }, (err)=>{
      this.capitales = [];
      this.hayError = true;
    }
    
    )
  }

  sugerencias( termino:string ){
    this.mostrarSugerencias = true
    this.hayError = false;
    this.termino  = termino;

    this.paisService.buscarCapital( termino )
      .subscribe( capitales =>{
        this.capitalesSugeridas = capitales.splice(0,5);
        this.capitalesSugeridas.forEach(el=>{
          el['is'] = 'capital';
        })
      }, (err)=>{
        this.capitalesSugeridas = [];
      } )
  }


  buscarTermino( termino: string ){
    this.buscar( termino );
  }


  clearLocale(){
    localStorage.setItem('capitales',JSON.stringify([]));
    this.capitales = [];
  }
}
