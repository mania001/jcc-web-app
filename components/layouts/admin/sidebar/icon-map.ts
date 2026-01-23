import {
  FileHeadphoneIcon,
  ImagesIcon,
  LayoutDashboardIcon,
  LayoutListIcon,
  MessageSquareWarningIcon,
  NewspaperIcon,
  PanelsTopLeftIcon,
  PaperclipIcon,
  SettingsIcon,
  StickyNoteIcon,
  TvMinimalPlayIcon,
  UserRoundCheckIcon,
  WalletCardsIcon,
} from 'lucide-react'

export const adminIconMap = {
  dashboard: LayoutDashboardIcon,
  layout: PanelsTopLeftIcon,
  list: LayoutListIcon,
  note: StickyNoteIcon,
  notice: MessageSquareWarningIcon,
  vod: TvMinimalPlayIcon,
  newspaper: NewspaperIcon,
  gallery: ImagesIcon,
  mp3: FileHeadphoneIcon,
  clip: PaperclipIcon,
  wallet: WalletCardsIcon,
  user: UserRoundCheckIcon,
  setting: SettingsIcon,
} as const

export type AdminIconKey = keyof typeof adminIconMap
