export class Uva{
    constructor(
        public id: number | null,
        public nombre: string,
        public descripcion: string,
        public acidez: number | null,
        public dulzor: number | null,
        public cuerpo: number | null,
        public taninos: number | null,
        public abv: number | null
    ) {}
}