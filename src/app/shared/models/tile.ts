import { TemplateRef, Type } from "@angular/core";

export interface Tile{
    cols: number;
    rows: number;
    content: Type<any>;
}