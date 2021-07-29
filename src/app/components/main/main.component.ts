import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

// api key: e13817da51f060b78566b30dc603d048
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {
  public comics$: Observable<any>;

  private _key: string = 'e13817da51f060b78566b30dc603d048'
  private _url: string = `https://gateway.marvel.com:443/v1/public/comics?format=comic&formatType=comic&noVariants=false&apikey=${this._key}`;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.comics$ = this.http.get(this._url)
    console.log(this.http.get(this._url))
  }

}
