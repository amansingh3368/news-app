import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../news-api.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  mArticles: Array<any>;

  constructor(public newsapi: NewsApiService) {
    newsapi
      .channel.subscribe((channel) => {
        if (channel !== undefined && channel !== null) {
          console.log(`channel : ${channel}`);
          this.newsapi.getArticlesByID(channel).subscribe(data => this.mArticles = data['articles']);
        }
      }, error => console.log(`error while getting channel => ${error}`));
  }

  ngOnInit() {
    //load news sources
    //load Articles
    this.newsapi.initArticles().subscribe(data => this.mArticles = data['articles']);
  }

}
