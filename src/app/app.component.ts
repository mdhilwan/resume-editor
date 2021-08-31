import {Component, OnInit} from '@angular/core';
import * as faker from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'resume-editor';
  basicInfo: any = {};

  ngOnInit(): void {
    this.basicInfo.name = faker.name.lastName();
    this.basicInfo.nameHighlight = faker.name.firstName();
    this.basicInfo.currentPosition = faker.name.jobTitle();
    this.basicInfo.contact = faker.internet.email()
  }

}
