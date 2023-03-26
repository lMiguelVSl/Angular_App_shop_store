export class Recipe {
    Name: string;
    Description: string;
    ImagePath: string;

    constructor(name: string, desc: string, imgPath: string) {
        this.Name = name;
        this.Description = desc;
        this.ImagePath = imgPath;
    }
}