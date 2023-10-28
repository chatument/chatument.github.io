export const Features = () => {
  return (
    <div className="mx-auto container mt-8 pl-20 pr-20 pt-8 grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-16 ">
      <article className="flex max-w-xl flex-col items-start justify-between">
        <div className="group relative">
          <h3 className="mt-3 text-2xl font-semibold leading-6 text-gray-800 group-hover:text-gray-500 text-center">
            Use it right where you need it
          </h3>
          <p className="mt-5 text-lg leading-6 text-gray-500 text-center">
            Integrated with Slack, and more tools are on the way (Microsoft
            Teams, Discord, Whatsapp and more).
          </p>
        </div>
      </article>

      <article className="flex max-w-xl flex-col items-start justify-between">
        <div className="group relative">
          <h3 className="mt-3 text-2xl font-semibold text-gray-800 group-hover:text-gray-500 text-center">
            Connect to your Notion docs
          </h3>
          <p className="mt-5 text-lg leading-6 text-gray-500 text-center">
            We support Notion as a data source with just a few clicks. More data
            sources will be added in the future.
          </p>
        </div>
      </article>

      <article className="flex max-w-xl flex-col items-start justify-between">
        <div className="group relative">
          <h3 className="mt-3 text-2xl font-semibold leading-6 text-gray-800 group-hover:text-gray-500 text-center">
            You own your data, we secure it
          </h3>
          <p className="mt-5 text-lg leading-6 text-gray-500 text-center">
            We do not use your data to train models. Rest assured, your data is
            safe; we encrypt everything, everywhere.
          </p>
        </div>
      </article>

      {/* <!-- More posts... --> */}
    </div>
  );
};
