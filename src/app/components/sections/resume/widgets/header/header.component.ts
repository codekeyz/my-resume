import { Component, OnInit, Input } from '@angular/core';

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

  constructor() {}

  ngOnInit() {}
}
