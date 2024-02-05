import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatherModule } from 'angular-feather';
import { IconsConst } from '../shared/consts/icons.const';

@NgModule({
  declarations: [],
  imports: [CommonModule, FeatherModule.pick(IconsConst)],
  exports: [FeatherModule],
})
export class IconsModule {}
