import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VehicleModel } from 'src/models/Models';
import { from, Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class VehiclesService {

    constructor(private httpClient: HttpClient) { }

    //getVehicles(): Observable<VehicleModel[]> {
    getVehicles(): VehicleModel[] {

        let kek: VehicleModel[] = [
            { "id": 0, "vrm": "kek", "vin": "lol", "bodystyle": "saloon", "manufacturer": "Audi", "model": "A4", "dateDelivered": new Date(2022), "notSold": true, "color": { "frontPart": "white", "middlePart": "white", "backPart": "white" }, "previousOwners": [{ "name": "kek", "email": "", "phone": "" }] },
            { "id": 1, "vrm": "kek123", "vin": "lol123", "bodystyle": "coupe", "manufacturer": "Audi", "model": "A4", "dateDelivered": new Date(2022), "notSold": false, "color": { "frontPart": "red", "middlePart": "red", "backPart": "red" }, "previousOwners": [] },
            { "id": 2, "vrm": "kek321", "vin": "lol321", "bodystyle": "hatchback", "manufacturer": "Audi", "model": "A4", "dateDelivered": new Date(2022), "notSold": false, "color": { "frontPart": "black", "middlePart": "black", "backPart": "black" }, "previousOwners": [] },
        ];

        return kek;
        //return this.httpClient.get<VehicleModel[]>('https://fakestoreapi.com/products?limit=');
    }

    addVehicle(newVehicle: VehicleModel): Observable<VehicleModel> {
        return this.httpClient.post<VehicleModel>('https://fakestoreapi.com/products', newVehicle);
    }

    updateVehicle(updatedVehicle: VehicleModel): Observable<VehicleModel> {
        return this.httpClient.put<VehicleModel>('https://fakestoreapi.com/products/' + updatedVehicle.id, updatedVehicle);
    }

    deleteVehicle(Vehicle: VehicleModel): Observable<VehicleModel> {
        return this.httpClient.delete<VehicleModel>('https://fakestoreapi.com/products/' + Vehicle.id);
    }
}
