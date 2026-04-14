import { Skeleton } from '@/components/ui/skeleton';

export function Loader() {
  return (
    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {Array.from({ length: 10 }).map((_, i) => (
        <div key={i} className="flex flex-col space-y-6">
          <Skeleton className="aspect-[2/3] w-full rounded-[2.5rem] shadow-sm" />
          <div className="space-y-4 px-2">
            <Skeleton className="h-8 w-full rounded-xl" />
            <Skeleton className="h-6 w-2/3 rounded-xl" />
          </div>
        </div>
      ))}
    </div>
  );
}
