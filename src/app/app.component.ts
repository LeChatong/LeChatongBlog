import { Component } from '@angular/core';
import {ArrayType} from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'LeChatongBlog';
  post: {
    title: string,
    content: string,
    loveIts: number,
    created_at: Date
  };
  posts = [
    {
     title: 'Mon Premier Post',
     content: 'Ceci est le 1er post que je fais ! ',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Mon Deuxième Post',
      content: 'Ceci est le second post que je fais ! ',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Mon Troisième Post',
      content: 'Ceci est le 3ème post que je fais ! ',
      loveIts: 0,
      created_at: new Date()
    }
  ];
}
