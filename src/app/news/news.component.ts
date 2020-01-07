import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../news-api.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  mArticles: Array<any>;

  constructor(public newsapi: NewsApiService) { }

  ngOnInit() {
    //load news sources
    //load Articles
    this.newsapi.initArticles().subscribe(data => this.mArticles = data['articles']);
  }

}
