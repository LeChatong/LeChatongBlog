import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {
  @Input() titre: string;
  @Input() contenu: string;
  @Input() creeLe: Date;
  @Input() lIts: number;
  constructor() { }

  ngOnInit() {
  }
  theLoveIt(cpt: number) {
    this.lIts = cpt;
  }

}
