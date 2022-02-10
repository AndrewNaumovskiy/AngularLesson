export class TreeModel {
    data: string = "";
    children: TreeModel[] = [];

    constructor(data: string, children: TreeModel[]) {
        this.data = data;
        this.children = children;
    }
}