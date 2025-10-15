import { MatIconModule } from '@angular/material/icon';
import { Component, computed, Input, signal } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

export type MenuItem = {
  icon: string;
  label: string;
  route?: string;
  activeIcon?: string;
  children?: MenuItem[];
  expanded?: boolean;
};

@Component({
  selector: 'app-custom-sidenav',
  standalone: true,
  imports: [MatListModule, MatIconModule, MatButtonModule, RouterModule],
  templateUrl: './custom-sidenav.html',
  styleUrl: './custom-sidenav.scss'
})
export class CustomSidenav {

  sideNavCollapsed = signal(false);

  @Input() set collapsed(val: boolean) {
    this.sideNavCollapsed.set(val);
  }

  menuItems = signal<MenuItem[]>([
    {
      icon: 'dashboard',
      activeIcon: 'dashboard',
      label: 'Painel',
      route: 'dashboard',
    },
    {
      icon: 'video_library',
      activeIcon: 'video_library',
      label: 'Conteúdo',
      expanded: false,
      children: [
        {
          icon: 'play_circle',
          activeIcon: 'play_circle',
          label: 'Vídeos',
          route: 'content/videos',
        },
        {
          icon: 'live_tv',
          activeIcon: 'live_tv',
          label: 'Transmissões',
          route: 'content/streams',
        },
        {
          icon: 'playlist_play',
          activeIcon: 'playlist_play',
          label: 'Playlists',
          route: 'content',
        }
      ]
    },
    {
      icon: 'assessment',
      activeIcon: 'assessment',
      label: 'Análises',
      expanded: false,
      children: [
        {
          icon: 'trending_up',
          activeIcon: 'trending_up',
          label: 'Desempenho',
          route: 'analytics/performance',
        },
        {
          icon: 'people',
          activeIcon: 'people',
          label: 'Público',
          route: 'analytics/audience',
        },
        {
          icon: 'insights',
          activeIcon: 'insights',
          label: 'Receita',
          route: 'analytics/revenue',
        }
      ]
    },
    {
      icon: 'comments',
      activeIcon: 'comments',
      label: 'Comentários',
      route: 'comments',
    },
    {
      icon: 'settings',
      activeIcon: 'settings',
      label: 'Configurações',
      expanded: false,
      children: [
        {
          icon: 'tune',
          activeIcon: 'tune',
          label: 'Geral',
          route: 'settings/general',
        },
        {
          icon: 'security',
          activeIcon: 'security',
          label: 'Privacidade',
          route: 'settings/privacy',
        },
        {
          icon: 'notifications',
          activeIcon: 'notifications',
          label: 'Notificações',
          route: 'settings/notifications',
        }
      ]
    }
  ]);

  profilePicSize = computed(() => this.sideNavCollapsed() ? '32' : '100');

  // Método para alternar submenus
  toggleSubmenu(item: MenuItem): void {
    if (item.children) {
      const items = this.menuItems();
      const updatedItems = items.map(i => {
        if (i === item) {
          return { ...i, expanded: !i.expanded };
        }
        return i;
      });
      this.menuItems.set(updatedItems);
    }
  }

  // Verificar se item tem submenu ativo
  hasActiveChild(item: MenuItem): boolean {
    if (!item.children) return false;

    const currentPath = window.location.pathname;
    return item.children.some(child =>
      child.route && currentPath.includes(child.route)
    );
  }

  // Verificar se item tem filhos
  hasChildren(item: MenuItem): boolean {
    return !!(item.children && item.children.length > 0);
  }
}
