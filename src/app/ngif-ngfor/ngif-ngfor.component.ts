import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif-ngfor',
  templateUrl: './ngif-ngfor.component.html',
  styleUrls: ['./ngif-ngfor.component.scss']
})
export class NgifNgforComponent implements OnInit {
  numero: number = 1;

  arrNumeros = ['Lebron James', 'Kobe Bryant', 'Dwayne Wade'];

  constructor() { }

  ngOnInit(): void {
  }

}
