import Skeleton from "@/components/ui/Skeleton";

export default function WalletLoading() {
  return (
    <div className="flex flex-col overflow-y-auto">
      <div className="px-5 pt-6 pb-3">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1.5">
            <Skeleton className="h-3 w-10" />
            <Skeleton className="h-6 w-32" />
          </div>
          <Skeleton className="h-10 w-10" rounded="rounded-full" />
        </div>
      </div>

      <div className="px-5 pb-24 flex flex-col gap-5">
        {/* Balance card skeleton */}
        <Skeleton className="h-[148px] w-full" rounded="rounded-lg" />

        {/* Quick actions skeleton */}
        <div className="grid grid-cols-4 gap-3">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <Skeleton className="h-[50px] w-[50px]" rounded="rounded-[15px]" />
              <Skeleton className="h-3 w-12" />
            </div>
          ))}
        </div>

        {/* Tx list skeleton */}
        <div>
          <Skeleton className="h-5 w-40 mb-3" />
          <div className="bg-surface border border-white/[.07] rounded-lg px-4">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-3 py-[13px] border-b border-white/[.07] last:border-0">
                <Skeleton className="h-[38px] w-[38px] flex-shrink-0" rounded="rounded-md" />
                <div className="flex-1 flex flex-col gap-1.5">
                  <Skeleton className="h-3.5 w-3/4" />
                  <Skeleton className="h-3 w-1/2" />
                </div>
                <Skeleton className="h-4 w-10 flex-shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
