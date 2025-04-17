import { Component, OnInit } from '@angular/core';
import { Country } from '../interface/country';
import { CountryinfoService } from '../services/countryinfo.service';

@Component({
  selector: 'app-world',
  imports: [],
  templateUrl: './world.component.html',
  styleUrl: './world.component.css'
})
export class WorldComponent implements OnInit {
  countryId = "";
  countryName!: string;
  countryCapital!: string;
  countryRegion!: string;
  countryLevel!: string;
  countryLongitude!: string;
  countryLatitude!: string;
  handleClick(event: MouseEvent) {
    // // debug
    // const message = "click";
    // console.log(message);
    const country = event.target as SVGAElement;
    this.countryId = country.id;
    console.log(this.countryId);
    this.loadCountry();
  }
  country: Country[] = [];
  constructor(private countryInfo: CountryinfoService) {}
  ngOnInit(): void {
    
  }
  loadCountry() {
    this.countryInfo.countryInfo(this.countryId).subscribe(response=>{
      this.country = response[1];
      const countryStats = this.country[0];
      // // api debug
      // console.log(this.country)
      // console.log(this.country[0].incomeLevel.value);
      this.countryName = countryStats.name;
      this.countryCapital = countryStats.capitalCity;
      this.countryRegion = countryStats.region.value;
      this.countryLevel = countryStats.incomeLevel.value;
      this.countryLongitude = countryStats.longitude;
      this.countryLatitude = countryStats.latitude;
    });
  }
}
