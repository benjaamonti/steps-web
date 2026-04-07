interface SkeletonAvatarProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

const sizeClasses = {
  sm: 'w-8 h-8',
  md: 'w-12 h-12',
  lg: 'w-16 h-16',
  xl: 'w-24 h-24',
}

export function SkeletonAvatar({ size = 'md', className = '' }: SkeletonAvatarProps) {
  return (
    <div
      className={`bg-gray-200 animate-pulse rounded-full ${sizeClasses[size]} ${className}`}
    />
  )
}