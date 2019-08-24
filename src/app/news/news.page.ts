import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {



  private formData : Object;
  private list : Array<Object>;

  constructor() { 
    this.formData = {
      title:  "",
      subtitle: ""
    };

    this.list = [];
  }
  

  add(item: Object) : void {
    this.list.push(item);
    this.formData = {};
    
  }

  ngOnInit() {
  }

}
