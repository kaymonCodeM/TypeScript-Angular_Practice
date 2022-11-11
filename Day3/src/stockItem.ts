interface StockItem{
    name:string;
    quantity:number;
}

class WarehouseLocation{
    private address:string;
    private item:any;

    constructor(address:string){
        this.address=address;
    }

    get getAddress():string{
        return this.address;
    }

    get _item():StockItem{
        return this.item;
    }

    set _item(item:StockItem){
        this.item = item;
    }
}

let myItem:StockItem={name:"Magic Item",quantity:8};
let myWarehouse = new WarehouseLocation("5123 P ST Lincoln, NE 623547");
myWarehouse._item=myItem;

console.log(`name=${myWarehouse._item.name}, quantity=${myWarehouse._item.quantity}`);

