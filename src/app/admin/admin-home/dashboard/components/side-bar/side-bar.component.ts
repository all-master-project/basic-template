import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cms-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent implements OnInit {
  collapseShow = 'hidden';

  constructor() {}

  ngOnInit(): void {}
  toggleCollapseShow(classes: any) {
    this.collapseShow = classes;
  }
}
