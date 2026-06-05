import Skeleton from "@/components/ui/Skeleton";

export default function MarketLoading() {
  return (
    <div className="flex flex-col overflow-y-auto">
      <div className="px-5 pt-6 pb-3 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <Skeleton className="h-8 w-36" />
          <Skeleton className="h-8 w-20" rounded="rounded-full" />
        </div>
        <Skeleton className="h-11 w-full" rounded="rounded-md" />
        <div className="flex gap-2">
          {[0, 1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-8 w-20" rounded="rounded-full" />
          ))}
        </div>
      </div>
      <div className="px-5 pb-24">
        <div className="grid grid-cols-2 gap-3">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="bg-surface border border-white/[.07] rounded-lg overflow-hidden">
              <Skeleton className="h-[110px] w-full" rounded="rounded-none" />
              <div className="p-3 flex flex-col gap-2">
                <Skeleton className="h-3 w-20" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-8 w-full" rounded="rounded-md" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
