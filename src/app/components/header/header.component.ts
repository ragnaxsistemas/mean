import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  nombre = 'julito'
  contador = 0
  arr = [1, 2, 3, 4, 5 , 6, 7, 8, 9]
  constructor() { 
    console.log('1 Componente Header creandose!');
  }

  ngOnInit() {
    console.log('2 Componente Header ya creado....');
  }

  cambiarNombre(){
    this.nombre = 'Tatayaya'
  }

  sumar(){
    this.contador++;
  }
  
  add(){
    this.arr.push(Math.random())
  }
}
