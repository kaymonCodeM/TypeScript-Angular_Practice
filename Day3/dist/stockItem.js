"use strict";
class WarehouseLocation {
    constructor(address) {
        this.address = address;
    }
    get getAddress() {
        return this.address;
    }
    get _item() {
        return this.item;
    }
    set _item(item) {
        this.item = item;
    }
}
let myItem = { name: "RainBow Gloves", quantity: 8 };
let myWarehouse = new WarehouseLocation("5123 P ST Lincoln, NE 623547");
myWarehouse._item = myItem;
console.log(`name=${myWarehouse._item.name}, quantity=${myWarehouse._item.quantity}`);
//# sourceMappingURL=stockItem.js.map