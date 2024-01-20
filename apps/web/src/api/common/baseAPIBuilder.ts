export abstract class APIBuilder {
  private readonly targetUrl: string;
  protected requestBody?: BodyInit;
  private customRequestHeaders = {};

  constructor(endpoint: string, baseUrl: string) {
    this.targetUrl = `${baseUrl}/${endpoint}`;
  }

  protected async sendRequestAndVerifyResponse(
    httpMethod: RequestInit["method"]
  ): Promise<Response> {
    const response = await fetch(this.targetUrl, {
      method: httpMethod,
      headers: this.customRequestHeaders,
      body: this.requestBody,
    });

    return response;
  }

  withBody(BodyData: BodyInit) {
    this.requestBody = BodyData;
  }
}
