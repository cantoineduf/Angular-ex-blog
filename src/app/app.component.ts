import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // titre de l'appli
  title = 'Mon premier blog';

  // array des posts
  posts = [
    {
      ptitle: 'Mon premier post',
      pcontent: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      loveIts: 2,
      created_at: '01/10/2019 10:10'
    },
    {
      ptitle: 'Mon deuxième post',
      pcontent: 'Lorem ipsum 222',
      loveIts: 0,
      created_at: '01/10/2019 10:12'
    },
    {
      ptitle: 'Encore un post',
      pcontent: 'Lorem ipsum 333',
      loveIts: -1
      //pas de date=>elle se mettra automatiquement grace à ngOnInit de post.components
      // ,
      // created_at: '01/08/2019 07:03'
    }
  ]

}
