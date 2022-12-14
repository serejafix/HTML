class Money {
    #grn;
    #kop;
  
    constructor(grn = 0, kop = 0) {
      this.#grn = grn;
      this.kop = kop;
    }
  
    getPrice() {
      return `${this.#grn}грн ${this.#kop}коп`
    }
  
    add(obj) {
      return new Money(this.#grn + obj.#grn, this.#kop + obj.#kop)
    }
    sub(obj){ 
      var grnsub = this.#grn - obj.#grn;
      var kopsub = this.#kop - obj.#kop;

      if(grnsub < 0)
      {
        return new Money(0,kopsun)
      }
      else if(kopsub)
      {
        return new Money(grnsub,0)
      }
      else if(grnsub < 0 && kopsub < 0 )
      {
        return new Money(0,0)
      }
      else
      {
        return new Money(grnsub,kopsub)
      }
    }
    set kop(value) {
      this.#kop = value % 100;
      this.#grn += value >= 100 ? 1 : 0;
    }
  }
  
  const fly = new Money(5000, 90);
  console.log('fly', fly.getPrice());
  const bus = new Money(200, 50);
  console.log('bus', bus.getPrice());

  const add = fly.add(bus);
  console.log(add.getPrice())

  const discount = new Money(100, 90);
  console.log(discount.getPrice());

  const subdisc = add.sub(discount);
  console.log('subdisc',subdisc.getPrice())

class Marker{
  #markerLive
  #markerColor
  constructor(color,count){
    if(count <= 100)
  {
    this.#markerLive = count;
  }
  else{
    this.#markerLive = 100;
  }
    this.#markerColor = color;
  }
  get getMarkerColor(){
    return this.#markerColor;
  }
  print(text)
  {
    const spaces1 = text.split(' ').length - 1;
    var markerProc = this.#markerLive * 2 + spaces1;
    var buffer = "";
    for(var i = 0; i <= markerProc-1; i++)
    {
      buffer += text[i];
    }
    return buffer;
  }
}

const marker = new Marker("green",4);

document.write(`<h1 style="color:${marker.getMarkerColor}">${marker.print("errereererererrereeerrereerererrerer")}</h1>`);