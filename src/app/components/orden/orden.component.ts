import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orden',
  templateUrl: './orden.component.html',
  styleUrls: ['./orden.component.css']
})
export class OrdenComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  @Input() dataOrden:any

  ngOnInit(): void {
  }
  estados = [
    {status:1, show: 'En progreso'},
    {status:2, show: 'Asignado'},
    {status:3, show: 'Nuevo'},
    {status:4, show: 'Otro'},
  ]

  StatusShow(status:number){
    return this.estados.find(s=>s.status === status)?.show
  }
  verificar(data){
    const data_ = [...new Set(data['destinations'])]
  
    let act
    data_.forEach(dest=>{
      act = dest['start_date']
      if (dest['start_date'] > act) {
        act = dest['start_date']
      }
    })

    let tiempo_Actual = new Date(act)
    const tiempo_start_date = new Date(data['start_date'])
    
    if (tiempo_Actual > tiempo_start_date) {
      console.log('navegar'); 
    }

  }
  navegar(data){
    const queryParams = {
      _id: data['_id']
    }
    this.router.navigate([`/detallesOrden`], { 
      queryParams
    });
  }

}
