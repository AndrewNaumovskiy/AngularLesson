import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Filter, Owner, VehicleModel } from 'src/models/Models';

import { VehiclesService } from 'src/services/vehicles.service';

import { CustomValidators } from 'src/models/customValidators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  vehicles: VehicleModel[];

  filters: Filter;

  isEdit: boolean;


  createFormPopupVisible: boolean;

  createVehicleForm = new FormGroup({
    id: new FormControl(''),
    vrm: new FormControl('', [Validators.required, CustomValidators.forbiddenValue]),
    vin: new FormControl('', [Validators.required, CustomValidators.getForbiddenValidator(['asd', 'kek'])]),
    bodystyle: new FormControl('', [Validators.required]),
    manufacturer: new FormControl('', [Validators.required]),
    model: new FormControl('', [Validators.required]),
    dateDelivered: new FormControl('', [Validators.required]),
    notSold: new FormControl('', {}),
    color: new FormGroup({
      frontPart: new FormControl('', [Validators.required]),
      middlePart: new FormControl('', [Validators.required]),
      backPart: new FormControl('', [Validators.required]),
    }),
    previousOwners: new FormArray([])
  });

  constructor(private vehiclesService: VehiclesService) { }

  ngOnInit(): void {
    this.vehicles = this.vehiclesService.getVehicles();
    //this.productsService.getVehicles()
    //  .subscribe((data: VehicleModel[]) => {
    //    this.vehicles = data;
    //  });

    this.filters = new Filter();

    this.createFormPopupVisible = false;


    // to fill middle and back color value once front is filled
    this.createVehicleForm.get('color')?.get('frontPart')?.valueChanges.subscribe(newFrontPart => {
      this.createVehicleForm.get('color')?.patchValue({
        middlePart: newFrontPart,
        backPart: newFrontPart
      })
    })

  }

  onFilterChanged() {
    this.filters = Object.assign({}, this.filters);
  }

  AddVehicle() {
    this.isEdit = false;

    this.createFormPopupVisible = true;

    var clearVehicle = new VehicleModel();

    this.createVehicleForm.setValue(clearVehicle);
  }

  RemoveVehicle(vehicle: VehicleModel) {

    // FAKE
    this.vehiclesService.deleteVehicle(vehicle)
      .subscribe((data: VehicleModel) => {
        //const productIndex = this.vehicles.indexOf(vehicle);
        //this.vehicles.splice(productIndex, 1);
      });

    let index = this.vehicles.indexOf(vehicle, 0);
    if (index > -1) {
      this.vehicles.splice(index, 1);
    }
  }

  EditVehicle(vehicle: VehicleModel) {
    this.isEdit = true;

    this.createFormPopupVisible = true;
    console.log(vehicle);
    this.createVehicleForm.setValue(vehicle);


  }

  RemoveOwner(vehicle: VehicleModel, owner: Owner) {
    let index = vehicle.previousOwners.indexOf(owner, 0);
    if (index > -1) {
      vehicle.previousOwners.splice(index, 1);
    }
  }

  get colorGroup(): FormGroup {
    return this.createVehicleForm.controls['color'] as FormGroup;
  }

  get previousOwners(): FormArray {
    return this.createVehicleForm.get('previousOwners') as FormArray;
  }




  AddOwner() {
    this.previousOwners.push(new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required]),
    }));
  }

  onSubmit() {
    let newVehicle = <VehicleModel>this.createVehicleForm.value;

    if (this.isEdit) {

      // FAKE
      this.vehiclesService.updateVehicle(newVehicle)
        .subscribe((data: VehicleModel) => {
          //const productIndex = this.vehicles.indexOf(newVehicle);
          //this.vehicles[productIndex] = data;
        });

      let vehicleIndex = this.vehicles.findIndex(x => x.id === newVehicle.id);

      this.vehicles[vehicleIndex] = newVehicle;
    }
    else {

      // FAKE
      this.vehiclesService.addVehicle(newVehicle)
        .subscribe((data: VehicleModel) => {
          //this.vehicles.push(data);
        })

      newVehicle.id = 3;
      this.vehicles.push(newVehicle);
    }

    this.ClosePopup();
  }

  ClosePopup() {
    this.createFormPopupVisible = false;
  }
}
