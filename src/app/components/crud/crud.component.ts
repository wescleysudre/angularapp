import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { Images } from '../../models/placeholder.model'

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {
  images = new Images();
  err: any;
  constructor(private crudService: CrudService) {
    this.getter();
   }

  ngOnInit(): void {
  }

  getter() {
    this.crudService.getPhtos().subscribe((data: Images) => {
      this.images = data;
      console.log("O data que recebemos", data);
      console.log("A variavel que preenchemos", this.images);
    },
    (error: any) => {
      this.err = error;
      console.error("ERROR: ", error);
    })
  }

}
