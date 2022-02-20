import { Pipe, PipeTransform } from '@angular/core';
import { VehicleModel, Color, Owner, Filter } from 'src/models/Models';

@Pipe({
    name: 'allFilter',
    pure: false
})
export class AllFilterPipe implements PipeTransform {

    transform(value: VehicleModel[], filter: Filter): VehicleModel[] {

        // copy of origin array
        let result: VehicleModel[] = [];

        value.forEach(el => {
            result.push(el);
        });


        // VRM or VIN

        if (filter.vrmVin !== undefined && filter.vrmVin !== "") {
            let vrmVinToLower = filter.vrmVin.toLocaleLowerCase();

            result = result.filter(i => {
                return i.vrm.toLocaleLowerCase().includes(vrmVinToLower) || i.vin.toLocaleLowerCase().includes(vrmVinToLower);
            });
        }

        // bodystyle

        if (filter.bodystyle !== undefined && filter.bodystyle !== "") {
            let bodystyleToLower = filter.bodystyle.toLocaleLowerCase();

            result = result.filter(i => {
                return i.bodystyle.toLocaleLowerCase().includes(bodystyleToLower);
            });
        }

        // make

        if (filter.make !== undefined && filter.make !== "") {
            let makeToLower = filter.make.toLocaleLowerCase();

            result = result.filter(i => {
                return i.manufacturer.toLocaleLowerCase().includes(makeToLower);
            });
        }

        // model

        if (filter.model !== undefined && filter.model !== "") {
            let modelToLower = filter.make.toLocaleLowerCase();

            result = result.filter(i => {
                return i.model.toLocaleLowerCase().includes(modelToLower);
            });
        }

        // date FROM

        if (filter.dateDelivered !== undefined || filter.dateDelivered == 0) {
            result = result.filter(i => {
                return i.dateDelivered >= filter.dateDelivered;
            });
        }

        // notSold

        if (filter.notSold !== undefined && filter.notSold === true) {
            result = result.filter(i => {
                return i.notSold === true;
            });
        }

        // color

        if (filter.color !== undefined && filter.color !== "") {
            let colorToLower = filter.color.toLocaleLowerCase();

            result = result.filter(i => {
                return i.color.backPart.toLocaleLowerCase().includes(colorToLower) ||
                    i.color.middlePart.toLocaleLowerCase().includes(colorToLower) ||
                    i.color.frontPart.toLocaleLowerCase().includes(colorToLower);
            });
        }

        // owner name

        if (filter.ownerName !== undefined && filter.ownerName !== "") {
            let ownerNameToLower = filter.ownerName.toLocaleLowerCase();

            var ownersFits: Owner[] = [];

            result.forEach(i => {
                i.previousOwners.forEach(o => {
                    if (o.name.toLocaleLowerCase().includes(ownerNameToLower))
                        ownersFits.push(o);
                })
            })

            var resultByOwners: VehicleModel[] = [];

            result.forEach(i => {
                i.previousOwners.forEach(o => {
                    ownersFits.forEach(of => {
                        if (o === of)
                            resultByOwners.push(i);
                    })
                })
            });

            result = resultByOwners;
        }

        return result;
    }

}