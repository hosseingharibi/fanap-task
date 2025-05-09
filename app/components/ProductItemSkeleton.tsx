export default function ProductItemSkeleton() {
  return (
    <div className="animate-pulse rounded-xl bg-white p-3 shadow-lg">
      <div className="relative mx-3 mt-3 flex items-center justify-center h-60 overflow-hidden rounded-xl bg-gray-300">
        <div className="absolute top-0 left-0 m-2 h-6 w-20 rounded-full bg-gray-400"></div>
      </div>

      <div className="mt-4 px-5 pb-5">
        <div className="h-6 w-3/4 rounded bg-gray-300 mb-4"></div>

        <div className="mt-2 mb-5 flex items-center justify-between">
          <div className="h-8 w-24 rounded bg-gray-300"></div>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-5 w-5 rounded bg-gray-300" />
            ))}
          </div>
        </div>

        <div className="h-10 w-full rounded-md bg-gray-300"></div>
      </div>
    </div>
  );
}
