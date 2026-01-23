import { AdminIconKey } from '@/components/layouts/admin/sidebar/icon-map'
import { AdminRole, AdminRoles } from './roles'

export interface AdminNavItem {
  id: string
  label: string
  href?: string
  icon?: AdminIconKey
  roles?: AdminRole[]
  children?: AdminNavItem[]
}

export const adminNavigation: AdminNavItem[] = [
  // ─────────────────────────────────────────────
  // Dashboard
  // ─────────────────────────────────────────────
  {
    id: 'dashboard',
    label: '대시보드',
    href: '/admin',
    icon: 'dashboard',
  },

  // ─────────────────────────────────────────────
  // Site Management
  // ─────────────────────────────────────────────
  {
    id: 'site',
    label: '사이트 관리',
    roles: [AdminRoles.MASTER, AdminRoles.MANAGER],
    children: [
      {
        id: 'home',
        label: '홈 구성',
        icon: 'layout',
        href: '/admin/site/home',
      },
      {
        id: 'menu',
        label: '메뉴 관리',
        icon: 'list',
        href: '/admin/site/menu',
      },
      {
        id: 'page',
        label: '페이지 관리',
        icon: 'note',
        href: '/admin/site/pages',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Content
  // ─────────────────────────────────────────────
  {
    id: 'content',
    label: '콘텐츠',
    roles: [AdminRoles.MASTER, AdminRoles.EDITOR],
    children: [
      {
        id: 'notice',
        label: '공지사항',
        icon: 'notice',
        href: '/admin/content/notices',
      },
      {
        id: 'vod',
        label: 'VOD',
        icon: 'vod',
        href: '/admin/content/vod',
      },
      {
        id: 'newspaper',
        label: '신문',
        icon: 'newspaper',
        href: '/admin/content/newspaper',
      },
      {
        id: 'photo',
        label: '포토',
        icon: 'gallery',
        href: '/admin/content/photos',
      },
      {
        id: 'audio',
        label: '오디오',
        icon: 'mp3',
        href: '/admin/content/audio',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Media
  // ─────────────────────────────────────────────
  {
    id: 'media',
    label: '미디어',
    children: [
      {
        id: 'files',
        label: '파일 관리',
        icon: 'clip',
        href: '/admin/media/files',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Payment
  // ─────────────────────────────────────────────
  {
    id: 'payment',
    label: '결제',
    roles: [AdminRoles.MASTER],
    children: [
      {
        id: 'payments',
        label: '결제 관리',
        icon: 'wallet',
        href: '/admin/payments',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Operation
  // ─────────────────────────────────────────────
  {
    id: 'operation',
    label: '운영',
    children: [
      {
        id: 'admins',
        label: '관리자',
        icon: 'user',
        href: '/admin/operation/admins',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // System
  // ─────────────────────────────────────────────
  {
    id: 'system',
    label: '시스템',
    roles: [AdminRoles.MASTER],
    children: [
      {
        id: 'settings',
        label: '설정',
        icon: 'setting',
        href: '/admin/system/settings',
      },
    ],
  },
] as const
