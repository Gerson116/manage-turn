import { Component, OnInit } from '@angular/core';
import { IconsModule } from '../../icons/icons.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-search-client',
  standalone: true,
  imports: [IconsModule, RouterModule],
  templateUrl: './search-client.component.html',
  styleUrl: './search-client.component.css',
})
export class SearchClientComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
