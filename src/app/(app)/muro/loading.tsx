import Skeleton from "@/components/ui/Skeleton";

export default function MuroLoading() {
  return (
    <div className="flex flex-col overflow-y-auto">
      <div className="px-5 pt-6 pb-3">
        <Skeleton className="h-8 w-44 mb-2" />
        <Skeleton className="h-4 w-64" />
        <Skeleton className="h-11 w-full mt-4" rounded="rounded-md" />
      </div>
      <div className="px-5 pb-28 flex flex-col gap-3">
        {[0, 1, 2].map((i) => (
          <div key={i} className="bg-surface border border-white/[.07] rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <Skeleton className="h-6 w-28" rounded="rounded-md" />
              <Skeleton className="h-4 w-16" />
            </div>
            <Skeleton className="h-5 w-3/4 mb-2" />
            <Skeleton className="h-3.5 w-1/2 mb-3" />
            <Skeleton className="h-9 w-full" rounded="rounded-md" />
          </div>
        ))}
      </div>
    </div>
  );
}
