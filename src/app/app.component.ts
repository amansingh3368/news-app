import { Component } from '@angular/core';
import { NewsApiService } from './news-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  mSources: Array<any>;

  constructor(private newsapi: NewsApiService) {
    console.log('app component constructor called');
  }

  ngOnInit() {

    //load news sources
    this.newsapi.initSources().subscribe(data => this.mSources = data['sources']);
  }

}
