import { Component, OnInit, Input, ElementRef, Output, EventEmitter } from '@angular/core';
import { NewsApiService } from 'src/app/news-api.service';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {

  @Output() topicChanged = new EventEmitter<void>();

  mSources: Array<any>;
  constructor(private newsapi: NewsApiService) { }

  ngOnInit() {
    //load news sources
    this.newsapi.initSources().subscribe(data => this.mSources = data['sources']);
  }

  searchArticles(source) {
    if (source !== undefined) {
      this.newsapi.channel.next(source);
      this.topicChanged.emit();
    }
  }

}
