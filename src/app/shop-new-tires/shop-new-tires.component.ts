import { Component, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { ShopNewTiresService } from "../shop-new-tires.service";

@Component({
  selector: "app-shop-new-tires",
  templateUrl: "./shop-new-tires.component.html",
  styleUrls: ["./shop-new-tires.component.css"]
})
export class ShopNewTiresComponent implements OnInit {
  yearData: number[];
  makeData: string[];
  modelsData: string[];
  stylesData: string[];

  yearFlag: boolean = false;
  makeFlag: boolean = false;
  modelFlag: boolean = false;
  styleFlag: boolean = false;
  finalFlag: boolean = false;
  btnFlag: boolean = true;

  yearValue: number = 0;
  makeValue: string;
  modelValue: string;
  styleValue: string;
  constructor(private shopNewtires: ShopNewTiresService) {}

  ngOnInit() {
    // this.getYearData();
    // this.getMakingData();
    // this.getModelData();
    // this.getStyleData();
  }
  //if(this.showcarView == true){
    closeAll() {
    this.yearFlag = false;
    this.makeFlag = false;
    this.modelFlag = false;
    this.styleFlag = false;
    this.finalFlag = false;
    this.btnFlag = true;
  }
  getYearsData() {
    this.shopNewtires.getYearData().then(data => {
      this.yearData = data.year;
      this.yearFlag = true;
      this.btnFlag = false;
    });
  }

  getMakeData(item) {
    this.shopNewtires.getMakingData().then(data => {
      this.makeData = data.make;
      this.yearFlag = false;
      this.makeFlag = true;
      this.yearValue = item;
    });
  }

  getModelData(item) {
    this.shopNewtires.getModelData().then(data => {
      this.modelsData = data.model;
      this.makeFlag = false;
      this.modelFlag = true;
      this.makeValue = item;
    });
  }

  getStyleData(item) {
    this.shopNewtires.getStyleData().then(data => {
      this.stylesData = data.trim;
      this.styleFlag = true;
      this.modelFlag = false;
      this.modelValue = item;
    });
  }

  getSelectedData(item) {
    this.finalFlag = true;
    this.styleFlag = false;
    this.styleValue = item;
  }
  
}
