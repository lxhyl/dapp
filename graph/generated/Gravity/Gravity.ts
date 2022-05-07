// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class SentNote extends ethereum.Event {
  get params(): SentNote__Params {
    return new SentNote__Params(this);
  }
}

export class SentNote__Params {
  _event: SentNote;

  constructor(event: SentNote) {
    this._event = event;
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get note(): string {
    return this._event.parameters[1].value.toString();
  }
}

export class Gravity extends ethereum.SmartContract {
  static bind(address: Address): Gravity {
    return new Gravity("Gravity", address);
  }
}
