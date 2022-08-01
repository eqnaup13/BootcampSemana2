import { Component, OnInit } from '@angular/core';
import { IAuto } from '../interfaces/auto';

@Component({
  selector: 'app-pagina-inicio',
  templateUrl: './pagina-inicio.component.html',
  styleUrls: ['./pagina-inicio.component.css']
})
export class PaginaInicioComponent implements OnInit {

  nuevoAuto : IAuto = {
    marca:'',
    modelo: '',
    precio: 0
  }

  autoss: IAuto[] = [
    {
      marca: 'Toyota',
      modelo: 'Corolla',
      precio: 90120,
    }
  ]

  agregar(){
    if(this.nuevoAuto.marca.trim().length === 0){
      return;
    }
    if(this.nuevoAuto.modelo.trim().length === 0){
      return;
    }
    if(this.nuevoAuto.precio === null){
      return;
    }
    this.autoss.push(this.nuevoAuto)
    this.nuevoAuto = {
      marca: '',
      modelo: '',
      precio: 0
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
