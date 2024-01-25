import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CargoOrdesService } from 'src/app/servicios/cargo-ordes.service';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-cargos-details',
  templateUrl: './cargos-details.component.html',
  styleUrls: ['./cargos-details.component.css']
})
export class CargosDetailsComponent implements OnInit {

  constructor(
    private rutaActiva: ActivatedRoute, private router: Router,
    private _ordes: CargoOrdesService,
    private _formBuilder: FormBuilder
  ) { }
  dataOrden
  isLinear = true;

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  ngOnInit(): void {
    this.rutaParams()
    // this.cargaOrdenes()
  }
  rutaParams(){
    this.rutaActiva.queryParams.subscribe((params:any) => {
      // const param = JSON.parse(JSON.stringify(params))
      if (params['_id']) {
        this.cargaOrdenes(params['_id'])
      }
    });
  }
  cargaOrdenes(_id){
    this._ordes.orders().subscribe((resp:any)=>{
      const {status, result} = resp
      console.log(result);
      if (status === 200) {
        const nuevos =result['status_list']['pickup']
        const contadorpickup = [...new Set([...nuevos])].filter(c=>c.active).length
        result['contadorpickup'] = contadorpickup
        this.dataOrden = result

      }
    })
  }
  trackOrder(){
    console.log('track Order');
  }

}
