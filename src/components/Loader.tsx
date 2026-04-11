import { Skeleton } from '@/components/ui/skeleton';

export function Loader() {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {Array.from({ length: 10 }).map((_, i) => (
        <div key={i} className="flex flex-col space-y-5">
          <Skeleton className="aspect-[2/3] w-full rounded-[2rem]" />
          <div className="space-y-3 px-2">
            <Skeleton className="h-7 w-full rounded-lg" />
            <Skeleton className="h-5 w-2/3 rounded-lg" />
          </div>
        </div>
      ))}
    </div>
  );
}
