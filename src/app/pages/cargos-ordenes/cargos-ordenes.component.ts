import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CargoOrdesService } from 'src/app/servicios/cargo-ordes.service';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-cargos-ordenes',
  templateUrl: './cargos-ordenes.component.html',
  styleUrls: ['./cargos-ordenes.component.css']
})
export class CargosOrdenesComponent implements OnInit {
  ordenes_arr = []
  myControl = new FormControl('');
  filteredOptions: Observable<string[]>;
  ordenes_result = []

  constructor(
    private _ordes: CargoOrdesService
  ) { }
  


  ngOnInit(): void {
    this.cargaOrdenes()
    this.automaticos()
  }

  cargaOrdenes(){
    this._ordes.upcomming().subscribe((resp:any)=>{
      const {status, result} = resp
      if (status === 200) {
        this.ordenes_arr = result
        this.ordenes_result = result
      }
    })
  }
  automaticos(){
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }
  private _filter(value: string): string[] {
    let data = []
    if (value['order_number']) {
      data.push(value)
    }else{

      const filterValue = value.toLowerCase();
      data=  this.ordenes_arr.filter(order => order['order_number'].toLowerCase().includes(filterValue));
    }
    this.ordenes_result = data
    return data
  }

  displayFn(info: any): any {
    return info && `${info['order_number']}` ? `${info['order_number']}` : '';
  }

}
