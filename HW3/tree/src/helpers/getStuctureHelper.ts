import { TreeModel } from "src/models/treeModel";

export abstract class GetStructureHelper {
    public static GetStructure(): TreeModel {
        let root: TreeModel = new TreeModel("root",
            [
                new TreeModel("a", []),
                new TreeModel("b", []),
                new TreeModel("c", [
                    new TreeModel("d", []),
                    new TreeModel("e", []),
                    new TreeModel("f", []),
                ]),
                new TreeModel("g", [
                    new TreeModel("h", [
                        new TreeModel("i", []),
                        new TreeModel("j", []),
                        new TreeModel("k", []),
                    ]),
                    new TreeModel("l", [
                        new TreeModel("m", [
                            new TreeModel("n", []),
                        ]),
                        new TreeModel("o", []),
                        new TreeModel("p", [
                            new TreeModel("q", []),
                            new TreeModel("r", []),
                        ]),
                    ]),
                ]),
            ]);

        return root;
    }
}