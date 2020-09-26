export interface IDish {
    id: number | string;
    title: string;
    calories: number;
    description: string;
    photo: string;
    recommend: boolean;
    calculated: boolean;
}
  

export interface IDishes {
    dishes: IDish[]
}