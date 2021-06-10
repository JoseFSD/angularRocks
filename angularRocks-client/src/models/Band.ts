class Band {
    name: string;
    description: string;
    img: string;
    video: string;
    foundation_year: number;
    constructor(item?: any){
        this.name = item?.name || 'Unassigned name';
        this.description = item?.description || 'Unassigned description';
        this.img = item?.img || 'Unassigned img';
        this.video = item?.video || 'Unassigned video link';
        this.foundation_year = item?.foundation_year || 'Unassigned year';
    }
}