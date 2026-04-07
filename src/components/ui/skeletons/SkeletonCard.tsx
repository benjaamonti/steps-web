interface SkeletonCardProps {
  className?: string
}

export function SkeletonCard({ className = '' }: SkeletonCardProps) {
  return (
    <div className={`bg-gray-200 animate-pulse rounded-lg ${className}`}>
      <div className="aspect-video bg-gray-300 rounded-t-lg" />
      <div className="p-4 space-y-3">
        <div className="h-5 bg-gray-300 rounded w-3/4" />
        <div className="h-4 bg-gray-300 rounded w-full" />
        <div className="h-4 bg-gray-300 rounded w-5/6" />
      </div>
    </div>
  )
}