export abstract class HelperClass {
    private static _id: number = 0;

    public static GenerateId(): number {
        return ++this._id;
    }
}