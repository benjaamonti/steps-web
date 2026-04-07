interface SkeletonImageProps {
  aspectRatio?: string
  className?: string
}

export function SkeletonImage({
  aspectRatio = 'aspect-video',
  className = '',
}: SkeletonImageProps) {
  return (
    <div
      className={`bg-gray-200 animate-pulse rounded-lg ${aspectRatio} ${className}`}
    />
  )
}