import { Component, OnInit } from '@angular/core';
import { NewsApiService } from 'src/app/news-api.service';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {
  mSources: Array<any>;
  mArticles: Array<any>;
  constructor(private newsapi:NewsApiService) { }

  ngOnInit() {
    
  }
  searchArticles(source){
    console.log("selected source is: "+source);
    this.newsapi.getArticlesByID(source).subscribe(data => this.mArticles = data['articles']);
  }
  
}
