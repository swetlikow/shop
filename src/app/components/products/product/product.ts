
export class Product {
    constructor(
        public id: number = null,
        public name: string,
        public count: number,
        public price: number,
        public bought: boolean = false
    ) { }
}
