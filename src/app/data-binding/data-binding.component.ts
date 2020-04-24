import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {
  numero: number;
  constructor() { }

  ngOnInit(): void {
  }

  obtemNumero(numero: number) {
    this.numero = numero;
  }

}
