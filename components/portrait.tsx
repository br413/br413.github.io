import Image from 'next/image'
import { cn } from '@/lib/utils'
import { getProfileImage } from '@/lib/profile-image'
import { BASE_PATH, SITE_CONFIG } from '@/lib/constants'

type PortraitProps = {
  size?: number
  className?: string
  priority?: boolean
}

/** Renders the portrait photo, or nothing if public/profile.* doesn't exist yet. */
export function Portrait({ size = 64, className, priority }: PortraitProps) {
  const src = getProfileImage()
  if (!src) return null

  return (
    <Image
      src={`${BASE_PATH}${src}`}
      alt={SITE_CONFIG.name}
      width={size}
      height={size}
      priority={priority}
      className={cn('rounded-full border border-line object-cover', className)}
      style={{ width: size, height: size }}
    />
  )
}
