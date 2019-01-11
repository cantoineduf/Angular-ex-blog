import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() ptitle: string;
  @Input() pcontent: string;
  @Input() loveIts: number;
  @Input() created_at: Date;

  constructor() {}

  // si le post n'a pas de date, on met la date et heure courante
  ngOnInit() {
    if (this.created_at == null) {
      this.created_at = new Date();
    }
  }

  //action Love it (on incrémente de 1 le nb loveits)
  onLove() {
    this.loveIts = this.loveIts + 1;
  }

  //action Don't Love it (on décrémente de 1 le nb loveits)
  onDontLove() {
    this.loveIts = this.loveIts - 1;
  }
}
