import { Component } from './Component';

export class Configuration {
    public id: string;
    public name: string;
    public imagePath: string;
    public description: string;
    public components: Component[];

    constructor(name: string, description: string, imagePath: string,components:Component[]) {
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.components= Component[''] }
}
