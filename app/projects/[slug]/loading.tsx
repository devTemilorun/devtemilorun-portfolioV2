export default function Loading() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="animate-pulse">
          <div className="h-6 w-32 bg-gray-200 rounded mb-8"></div>
          <div className="h-12 w-3/4 bg-gray-200 rounded mb-6"></div>
          <div className="grid grid-cols-3 gap-6 mb-12">
            <div className="h-24 bg-gray-200 rounded-xl"></div>
            <div className="h-24 bg-gray-200 rounded-xl"></div>
            <div className="h-24 bg-gray-200 rounded-xl"></div>
          </div>
          <div className="h-32 bg-gray-200 rounded mb-12"></div>
          <div className="h-32 bg-gray-200 rounded mb-12"></div>
        </div>
      </div>
    </div>
  );
}