export default function ProductDetailsSkeleton() {
  return (
    <section className="py-4 bg-white md:py-16 animate-pulse">
      <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
          <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
            <div className="w-full h-96 bg-gray-200 rounded-md" />
          </div>

          <div className="mt-6 sm:mt-8 lg:mt-0 space-y-4">
            <div className="h-6 bg-gray-200 rounded w-3/4" />
            <div className="h-8 bg-gray-200 rounded w-1/3" />

            <div className="flex gap-2">
              <div className="h-6 w-20 bg-gray-200 rounded" />
              <div className="h-6 w-12 bg-gray-200 rounded" />
            </div>

            <div className="h-32 bg-gray-200 rounded w-full" />

            <div className="space-y-2">
              <div className="h-4 w-24 bg-gray-300 rounded" />
              <div className="flex gap-2">
                <div className="h-8 w-20 bg-gray-200 rounded" />
                <div className="h-8 w-20 bg-gray-200 rounded" />
              </div>
            </div>

            <div className="space-y-2">
              <div className="h-4 w-24 bg-gray-300 rounded" />
              <div className="flex gap-2 flex-wrap">
                <div className="h-8 w-16 bg-gray-200 rounded" />
                <div className="h-8 w-16 bg-gray-200 rounded" />
                <div className="h-8 w-16 bg-gray-200 rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
