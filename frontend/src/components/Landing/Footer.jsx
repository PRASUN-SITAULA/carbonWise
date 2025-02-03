export const Footer = () => {
  return (
    <footer className="bg-teal-600 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="mt-8 border-gray-700 text-center">
          <p>
            &copy; {new Date().getFullYear()} EcoTrack. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
