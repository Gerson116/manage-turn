import { Component, OnInit } from '@angular/core';
import { IconsModule } from '../../icons/icons.module';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from '../../shared/spinner/spinner.component';

@Component({
  selector: 'app-search-client',
  standalone: true,
  imports: [IconsModule, RouterModule, SpinnerComponent],
  templateUrl: './search-client.component.html',
  styleUrl: './search-client.component.css',
})
export class SearchClientComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
