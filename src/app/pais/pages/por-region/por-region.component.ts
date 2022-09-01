import { Component, OnInit } from '@angular/core';
import { Country, RegionBloc } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `.btn-outline-primary{
      padding: 0.3rem;
      margin: 0.2rem
    }
    `
  ]
})
export class PorRegionComponent implements OnInit {

  get regiones ():RegionBloc[] {
    return this.paisService.getRegionesCode()
}
  regionActiva: RegionBloc={ name: '' };
  paises: Country[]=[];

  constructor( private paisService:PaisService) { }
  
  ngOnInit(): void {
  }

  getRegionActiva( region:RegionBloc ){
    const {name, code} = region;
    
    if( this.regionActiva.name === name ){return};
  
    this.regionActiva.name = name;
    this.paises = [];

    this.paisService.buscarPaisPorRegion( code || '' )
      .subscribe( paises => this.paises = paises);
  }

  getClass( region:RegionBloc ){
    return region.name === this.regionActiva.name ? 'btn btn-primary': 'btn btn-outline-primary';
  }


}
