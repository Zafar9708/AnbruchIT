import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4 bg-gray-100">
      <Head>
        <title>Tech Recruitment & Managed IT Services</title>
        <meta name="description" content="Tech recruitment, staffing, and managed IT services." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-center">
        <h1 className="text-4xl font-bold mb-6">
          Scaling your in-house tech team?
        </h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Tech Recruitment & Staffing</h2>
          <p className="text-lg mb-4">Over 65,000 tech candidates in our database</p>
          <a href="/recruitment" className="text-blue-500 hover:underline">Learn more about recruitment</a>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Developing your website, app, or MVP?</h2>
          <p className="text-lg mb-4">Managed IT services to support your tech needs</p>
          <a href="/managed-it" className="text-blue-500 hover:underline">Learn more about our services</a>
        </section>
      </main>

      <footer className="mt-8 py-4 border-t border-gray-300 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Your Company Name</p>
      </footer>
    </div>
  );
}
