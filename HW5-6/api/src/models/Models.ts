export class VehicleModel {
    id: number;
    vrm: string;
    vin: string;
    bodystyle: string;
    manufacturer: string;
    model: string;
    dateDelivered: Date;
    notSold: boolean;
    color: Color;
    previousOwners: Owner[];

    constructor() {
        this.id = 0;
        this.vrm = "";
        this.vin = "";
        this.bodystyle = "";
        this.manufacturer = "";
        this.model = "";
        this.dateDelivered = new Date(0);
        this.notSold = false;
        this.color = new Color();
        this.previousOwners = [];
        this.previousOwners.length = 0;
    }


    //clone(copy: VehicleModel) {
    //    this.id = copy.id;
    //    this.vrm = copy.vrm;
    //    this.vin = copy.vin;
    //    this.bodystyle = copy.bodystyle;
    //    this.manufacturer = copy.manufacturer;
    //    this.model = copy.model;
    //    this.dateDelivered = copy.dateDelivered;
    //    this.notSold = copy.notSold;
    //    this.color = copy.color;
    //    this.previousOwners = copy.previousOwners;
    //}
}

export class Color {
    frontPart: string;
    middlePart: string;
    backPart: string;

    constructor() {
        this.frontPart = "";
        this.middlePart = "";
        this.backPart = "";
    }
}

export class Owner {
    name: string;
    email: string;
    phone: string;
}

export class Filter {
    vrmVin: string;
    bodystyle: string;
    make: string;
    model: string;
    dateDelivered: Date;
    notSold: boolean;
    color: string;
    ownerName: string;

    constructor() {
        this.vrmVin = "";
        this.bodystyle = "";
        this.make = "";
        this.model = "";
        this.dateDelivered = new Date(0);
        this.notSold = false;
        this.color = "";
        this.ownerName = "";
    }
}