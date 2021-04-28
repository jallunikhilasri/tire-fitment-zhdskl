import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class ShopNewTiresService {
  constructor(private httpClient: HttpClient) {}

  getYearData(): Promise<any> {
    return this.httpClient
      .get("https://6080be3273292b0017cdbf2a.mockapi.io/years")
      .toPromise();
  }
  getMakingData(): Promise<any> {
    return this.httpClient
      .get("https://6080be3273292b0017cdbf2a.mockapi.io/makes")
      .toPromise();
  }
  getModelData(): Promise<any> {
    return this.httpClient
      .get("https://6080be3273292b0017cdbf2a.mockapi.io/models")
      .toPromise();
  }
  getStyleData(): Promise<any> {
    return this.httpClient
      .get(" https://6080be3273292b0017cdbf2a.mockapi.io/trim")
      .toPromise();
  }
}
