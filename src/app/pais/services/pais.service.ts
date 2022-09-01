import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Country, RegionBloc } from '../interfaces/pais.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com';
  private regiones: RegionBloc[]=[
    {
      name:'European Union',
      code:'EU'
    },
    {
      name:'European Free Trade Association',
      code:'EFTA'
    },
    {
      name:'Caribbean Community',
      code:'CARICOM'
    },
    {
      name:'Pacific Alliance',
      code:'PA'
    },
    {
      name:'African Union',
      code:'AU'
    },
    {
      name:'Union of South American Nations',
      code:'USAN'
    },
    {
      name:'Eurasian Economic Union',
      code:'EEU'
    },
    {
      name:'Arab League',
      code:'AL'
    },
    {
      name:'Association of Southeast Asian Nations',
      code:'ASEAN'
    },
    {
      name:'Central American Integration System',
      code:'CAIS'
    },
    {
      name:'Central European Free Trade Agreement',
      code:'CEFTA'
    },
    {
      name:'North American Free Trade Agreement',
      code:'NAFTA'
    },
    {
      name:'South Asian Association for Regional Cooperation',
      code:'SAARC'
    },
  ];

  constructor( private http: HttpClient) { }

  buscarPais( termino:string ):Observable<Country[]> {
    const url = `${ this.apiUrl }/v3.1/name/${ termino }`;
    return this.http.get<Country[]>( url );

  }

  buscarCapital( termino:string ):Observable<Country[]>{
    const url = `${this.apiUrl}/v3.1/capital/${ termino }`;
    return this.http.get<Country[]>( url );

  }

  getPaisPorAlpha( id:string ):Observable<Country[]>{
    const url = `${this.apiUrl}/v3.1/alpha/${ id }`;
    return this.http.get<Country[]>( url );
  }

  getRegionesCode():RegionBloc[]{
    return this.regiones
  }

  buscarPaisPorRegion( region:string ):Observable<Country[]>{
    const url = `${this.apiUrl}/v2/regionalbloc/${ region }`;
    return this.http.get<Country[]>( url ).pipe( tap(console.log))

  }

}
