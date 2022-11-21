import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.scss']
})
export class ComponentBComponent implements OnInit {

  //properti untuk menangkap path variabelnya
  id: number = 0;

  constructor(
    //ini bersifat observable
    //jadi kita harus melakukan subscribe
    private readonly route: ActivatedRoute
  ) { }

  //lifecycle
  //ngOnInit -> akan di panggil ketika component ini di panggil
  ngOnInit(): void {
    this.route.params.subscribe({
      next: (params) => {
        console.log('params:', params['id'])
        // this.id = parseInt(params['id']) //re-assign

        const temp = Number(params['id'])
        if(temp) {
          this.id = Number(params['id'])
        }
      }
    })
  }

}
