export class TreeModel {
    data: string = "";
    children: TreeModel[] = [];
    light: boolean = false;

    constructor(data: string, children: TreeModel[]) {
        this.data = data;
        this.children = children;
    }

    public SetLight() {
        this.light = true;

        setTimeout(() => {
            this.light = false;
        }, 1000);
    }
}