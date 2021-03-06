"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var products_1 = require("./products");
var ProductsFormComponent = (function () {
    function ProductsFormComponent() {
        this.model = new products_1.Products(1, 'ProductA');
    }
    return ProductsFormComponent;
}());
ProductsFormComponent = __decorate([
    core_1.Component({
        selector: 'products-form',
        templateUrl: './products-form.component.html'
    })
], ProductsFormComponent);
exports.ProductsFormComponent = ProductsFormComponent;
//# sourceMappingURL=products-form.component.js.map