'use client'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useRouter, usePathname } from '@/i18n/navigation'
import { useTransition } from 'react'

export const LanguageSwitcher = ({ currentLocale }) => {
  const router = useRouter()
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()

  const handleChange = (newLocale) => {
    startTransition(() => {
      router.replace(pathname, { locale: newLocale })
    })
  }

  return (
    <Select onValueChange={handleChange} defaultValue={currentLocale}>
      <SelectTrigger className="w-auto">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="uz">🇺🇿 Узбекча</SelectItem>
        <SelectItem value="ru">🇷🇺 Русский</SelectItem>
        <SelectItem value="en">🇺🇸 English</SelectItem>
        <SelectItem value="ch">🇨🇳 中国</SelectItem>
      </SelectContent>
    </Select>
  )
}
