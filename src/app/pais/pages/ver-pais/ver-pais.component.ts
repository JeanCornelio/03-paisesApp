import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country; 

  constructor( 
      private activedRoute : ActivatedRoute,
      private paisService : PaisService
      ) { }

  ngOnInit(): void {

  
    this.activedRoute.params
    .pipe(
      switchMap( ( { id } ) => this.paisService.getPaisPorAlpha( id ) )
      )
      .subscribe( pais => {
         pais.forEach(pais=>{
          this.pais = pais;
         })

      })


}

}
