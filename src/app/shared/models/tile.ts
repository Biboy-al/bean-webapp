import { TemplateRef } from "@angular/core";

export interface Tile{
    cols: number;
    rows: number;
    content: TemplateRef<any>;
}