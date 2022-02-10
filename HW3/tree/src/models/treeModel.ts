export class TreeModel {
    data: string = "";
    children: TreeModel[] = [];
    light: boolean = false;

    constructor(data: string, children: TreeModel[]) {
        this.data = data;
        this.children = children;
    }

    public SetLight() {
        this.light = false;

        setTimeout(() => {
            this.light = true;
        }, 100);
    }
}