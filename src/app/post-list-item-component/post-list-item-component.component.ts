import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {
  @Input() loveIts: number;
  @Output() msg = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }
  iLoveIt() {
    this.loveIts = this.loveIts + 1;
    console.log(this.loveIts);
    this.msg.emit(this.loveIts);
  }
  iDontLoveIt() {
    this.loveIts = this.loveIts - 1;
    console.log(this.loveIts);
    this.msg.emit(this.loveIts);
  }

}
