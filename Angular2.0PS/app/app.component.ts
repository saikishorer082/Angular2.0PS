import { Component } from "@angular/core";
import { ProductService } from "./products/product.service"

@Component({
    selector: "pm-app",
    providers: [ProductService],
    template: `
        <div><h1>{{pageTitle}}</h1>
            <pm-products></pm-products>
            </div>    
            `
})
export class AppComponent {
    pageTitle: string = 'Acme Product Management'
}