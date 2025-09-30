import { MatIconModule } from '@angular/material/icon';
import { Component, computed, Input, signal } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { NgFor, NgIf } from '@angular/common';

export type MenuItem = {
  icon: string;
  label: string;
  route: string;
}


@Component({
  selector: 'app-custom-sidenav',
  imports: [MatListModule, MatIconModule, NgFor, NgIf],
  templateUrl: './custom-sidenav.html',
  styleUrl: './custom-sidenav.scss'
})
export class CustomSidenav {


  sideNavCollapsed = signal(false);

  @Input() set collapsed(val: boolean) {
    this.sideNavCollapsed.set(val)
  }

  menuItems = signal<MenuItem[]>([
    {
      icon: 'dashboard',
      label: 'Painel',
      route: 'dasboard',
    },
    {
      icon: 'video_library',
      label: 'Conteúdo',
      route: 'content',
    },
    {
      icon: 'assessment',
      label: 'Análises',
      route: 'analitics',
    },
    {
      icon: 'comments',
      label: 'Comentários',
      route: 'comments',
    }
  ]);

  profilePicSize = computed(() => this.sideNavCollapsed() ? '32' : '100');
}
