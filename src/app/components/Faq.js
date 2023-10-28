const questions = [
  {
    question: 'When will Chatument be available for everyone?',
    aswer:
      'We are giving some final touches here and there, we will start the closed beta in the following weeks, inviting organization from the waitlist',
  },
  {
    question: 'Will Chatument use my Data to train Deep Learning Models?',
    aswer: 'No. Chatument will not use any of your data to train models.',
  },
  {
    question: 'What are the integrations supported?',
    aswer:
      'We are integrated with Slack as a channel for using Chatument, and with Notion as a data Source, as soon as we launch the open beta, we will start the rollout of new integrations as fast as possible',
  },
];

export const Faq = () => {
  return (
    <ul className="max-w-xl mx-auto divide-y mt-16 lg:mt-20">
      <div>
        <h2 className="max-w-2xl mb-8 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl text-center ">
          FAQ
        </h2>
      </div>
      {questions.map(({ question, aswer }) => {
        return (
          <li className="mb-2" key={question}>
            <details className="group">
              <summary className="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                <svg
                  className="w-5 h-5 text-gray-500 transition group-open:rotate-90"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  ></path>
                </svg>
                <span>{question}</span>
              </summary>

              <article className="px-4 pb-4">
                <p className="font-sans text-gray-500">{aswer}</p>
              </article>
            </details>
          </li>
        );
      })}
    </ul>
  );
};
