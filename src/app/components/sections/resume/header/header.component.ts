import { Component, OnInit, Input } from '@angular/core';
import { Link } from './link.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() fullname: String;

  @Input() profession: String;

  @Input() avatar: String;

  @Input() email: String;

  @Input() skype: String;

  @Input() links: Link[];

  constructor() {}

  ngOnInit() {}
}
