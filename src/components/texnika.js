import React from "react";

class Texnikaota {
  constructor(props) {
    this.name = props;
  }

  name = "";
  OZU = "32gb";
  CPU = "3.80ghz";
  videoCarta = "4gb";
  //   olti() {
  //     console.log("oltiyadroli");
  //   }
}

class Texnika extends Texnikaota {}

const hp = new Texnika("Hp");
const acer = new Texnika("Acer");
const macbook = new Texnika("MacBook");

class Telephone extends Texnikaota {}

const iphone = new Telephone("Iphone");
const Samsung = new Telephone("Samsung");
const Xiaomi = new Telephone("Xiaomi");

console.log(iphone);
console.log(Samsung);
console.log(Xiaomi);
console.log(hp);
console.log(acer);
console.log(macbook);

// hp.olti()
// acer.olti()
// macbook.olti()
// iphone.olti()
// Samsung.olti()
// Xiaomi.olti()
export default Texnikaota;
