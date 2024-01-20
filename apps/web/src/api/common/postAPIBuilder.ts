import { APIBuilder } from "./baseAPIBuilder";

export class PostAPIBuilder extends APIBuilder {
  sendRequest() {
    return this.sendRequestAndVerifyResponse("POST");
  }
}
