export class Movie {
    id: string;
    rank: number;
    title: string;
    fullTitle: string;
    imDbRating: number;
    year: Date;
    isGood: boolean;

    constructor(_id: string, _rank: number, _title: string, _fullTitle: string, _imDbRating: number, _year: number) {
        this.id = _id;
        this.rank = _rank;
        this.title = _title;
        this.fullTitle = _fullTitle;
        this.imDbRating = _imDbRating;

        // just year
        //this.year = new Date(_year);

        // magic data
        // to randomize release date                                           // ~ 8 million ticks in year
        this.year = new Date(Date.now() * (Math.random() * 2 - 1) + Math.random() * 8_000_000);
        this.year.setFullYear(_year);
        // boolean value
        this.isGood = Math.random() >= 0.5;
    }
}