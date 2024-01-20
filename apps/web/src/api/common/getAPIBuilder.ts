import { APIBuilder } from "./baseAPIBuilder";

export class GetAPIBuilder extends APIBuilder {
  sendRequest() {
    return this.sendRequestAndVerifyResponse("GET");
  }
}
