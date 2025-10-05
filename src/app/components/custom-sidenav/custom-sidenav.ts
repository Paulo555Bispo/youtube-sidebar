import { MatIconModule } from '@angular/material/icon';
import { Component, computed, Input, signal } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

export type MenuItem = {
  icon: string;
  label: string;
  route: string;
  activeIcon?: string;
}

@Component({
  selector: 'app-custom-sidenav',
  imports: [MatListModule, MatIconModule, MatButtonModule, RouterModule],
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
      activeIcon: 'dashboard',
      label: 'Painel',
      route: 'dasboard',
    },
    {
      icon: 'video_library',
      activeIcon: 'video_library',
      label: 'Conteúdo',
      route: 'content',
    },
    {
      icon: 'assessment',
      activeIcon: 'assessment',
      label: 'Análises',
      route: 'analitics',
    },
    {
      icon: 'comments',
      activeIcon: 'comments',
      label: 'Comentários',
      route: 'comments',
    }
  ]);

  profilePicSize = computed(() => this.sideNavCollapsed() ? '32' : '100');
}
