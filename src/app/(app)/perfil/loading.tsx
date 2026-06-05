import Skeleton from "@/components/ui/Skeleton";

export default function PerfilLoading() {
  return (
    <div className="flex flex-col overflow-y-auto pb-24">
      <div className="px-5 pt-6 pb-3">
        <Skeleton className="h-8 w-24" />
      </div>
      <div className="px-5 flex flex-col gap-4">
        <div className="bg-surface border border-white/[.07] rounded-lg p-5 flex items-center gap-4">
          <Skeleton className="h-14 w-14 flex-shrink-0" rounded="rounded-full" />
          <div className="flex flex-col gap-2 flex-1">
            <Skeleton className="h-5 w-36" />
            <Skeleton className="h-4 w-48" />
            <Skeleton className="h-5 w-20" rounded="rounded-md" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {[0, 1, 2].map((i) => (
            <Skeleton key={i} className="h-20 w-full" rounded="rounded-lg" />
          ))}
        </div>
        <Skeleton className="h-[220px] w-full" rounded="rounded-lg" />
        <Skeleton className="h-12 w-full" rounded="rounded-full" />
      </div>
    </div>
  );
}
