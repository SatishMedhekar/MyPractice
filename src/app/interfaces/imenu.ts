export interface IMenu{
    menuType?:string;
    menudetail?:IMenuDetail[];
}

export interface IMenuDetail{
    id?:string;
    displayOrder?:number;
    name?:string;
    imagePath?: string;
    imageFileName? : string;
}