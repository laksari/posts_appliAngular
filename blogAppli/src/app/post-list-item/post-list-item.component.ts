import {Component, Input, OnInit} from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input()
  titre: string;
  @Input()
  contenu: string;
  @Input()
  loveIts: number;

  createDate: Date = new Date();

  constructor() { }

  ngOnInit() {}

  onLoveIt() {
    this.loveIts = this.loveIts + 1;
    console.log(this.loveIts);
  }

  onDontLoveIt() {
    this.loveIts = this.loveIts - 1;
  }

}
