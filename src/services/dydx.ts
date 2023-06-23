import { DydxClient, OrderResponseObject } from "@dydxprotocol/v3-client";
import { ClientOptions } from "@dydxprotocol/v3-client/build/src/dydx-client";
require("dotenv").config();

export class Dydx extends DydxClient {
  constructor(
    host: string = process.env.API_HOST_GOERLI || "",
    options: ClientOptions = {
      networkId: 5,
      apiTimeout: 3000,
      starkPrivateKey: process.env.STARK_PRIVATE_KEY || "",
      apiKeyCredentials: {
        key: process.env.API_KEY || "",
        secret: process.env.API_SECRET || "",
        passphrase: process.env.API_PASSPHRASE || "",
      },
    }
  ) {
    super(host, options);
  }
}
