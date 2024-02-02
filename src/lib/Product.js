class Product{
    constructor(iname, iprice, ivolume){
        this._name = iname;
        this._price = iprice;
        this._volume = ivolume;
    }

    get name(){
        return this._name;
    }
    get price(){
        return this._price;
    }
    get volume(){
        return this._volume;
    }

    set name(iName){
        this._name = iName;
    }
    set price(iPrice){
        this._price = iPrice;
    }
    set volume(iVolume){
        this._volume = iVolume;
    }
}

export default Product;