const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-300">404</h1>
        <h2 className="text-4xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-lg mb-8">
          Sorry, the page youre looking for doesnt exist or has been moved.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => router.back()}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
          >
            Go Back
          </button>
          {/* <Link href="/">
            <a className="px-6 py-3 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-900">
              Go to Home
            </a>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default NotFound;
