export const QuoteSection = () => {
  return (
    <section className="bg-blue-100 py-12 px-4 sm:px-6 lg:px-8 mt-10 md:mt-36">
      <div className="max-w-3xl mx-auto text-center">
        <blockquote className="mt-4">
          <p className="text-xl font-medium text-gray-900 italic">
            &quot;We are the first generation to feel the effect of climate
            change and the last generation who can do something about it.&quot;
          </p>
        </blockquote>
        <figcaption className="mt-4">
          <div className="text-teal-600 font-semibold">
            &quot;Barack Obama&quot;
          </div>
        </figcaption>
      </div>
    </section>
  );
};
