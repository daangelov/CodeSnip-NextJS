export default function NotFound() {
  return (
    <div className="px-6 lg:px-8">
      <div className="mx-auto max-w-2xl py-32 sm:py-44">
        <div className="text-center">
          <p className="text-9xl font-semibold text-orange-600">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900">
            Страницата не е намерена
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            За съжаление не успяхме да намерим страницата, която търсиш.
          </p>
        </div>
      </div>
    </div>
  );
}
