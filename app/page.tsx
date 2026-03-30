import Link from "next/link";
import QuizPreview from "@/components/QuizPreview";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Nav */}
      <nav className="border-b border-slate-100 sticky top-0 bg-white/95 backdrop-blur z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-bold text-slate-900 tracking-tight">
            Lead<span className="text-indigo-600">Quiz</span>
          </span>
          <div className="flex items-center gap-4">
            <Link
              href="#how-it-works"
              className="text-sm text-slate-500 hover:text-slate-900 hidden sm:block"
            >
              How It Works
            </Link>
            <Link
              href="#features"
              className="text-sm text-slate-500 hover:text-slate-900 hidden sm:block"
            >
              Features
            </Link>
            <Link
              href="/dashboard"
              className="text-sm font-medium bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Create Your Quiz
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-24 pb-20 px-6 text-center bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 text-sm font-medium px-4 py-1.5 rounded-full mb-8">
            <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" />
            Built for Lead Generation
          </div>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
            Convert Visitors
            <br />
            <span className="text-indigo-600">Into Leads</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-10">
            Build embeddable quizzes that capture emails and deliver
            personalized results.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <Link
              href="/dashboard"
              className="w-full sm:w-auto bg-indigo-600 text-white text-base font-semibold px-8 py-3.5 rounded-xl hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200"
            >
              Create Your Quiz
            </Link>
            <Link
              href="#how-it-works"
              className="w-full sm:w-auto border border-slate-200 text-slate-700 text-base font-medium px-8 py-3.5 rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-colors"
            >
              See How It Works
            </Link>
          </div>
          <p className="text-sm text-slate-400">
            No coding required &nbsp;•&nbsp; Embed anywhere &nbsp;•&nbsp; Start
            capturing leads in minutes
          </p>
        </div>
      </section>

      {/* Blog + Quiz Preview */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest">
              See It In Action
            </p>
            <h2 className="text-3xl font-bold text-slate-900 mt-2">
              Drop a quiz right inside any article
            </h2>
          </div>

          {/* Simulated blog post */}
          <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
            {/* Article header */}
            <div className="bg-white px-8 pt-8 pb-6 border-b border-slate-100">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">
                  Home &amp; Living
                </span>
                <span className="text-xs text-slate-400">5 min read</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                The Homeowner's Complete Guide to Seasonal Maintenance
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Whether you just bought your first home or have owned one for
                decades, staying on top of maintenance is the key to protecting
                your investment. In this guide we cover the most important tasks
                for every season — from HVAC filters to gutter cleaning and
                roof inspections...
              </p>
            </div>

            {/* Embedded quiz widget */}
            <div className="px-8 py-6 bg-slate-50 border-b border-slate-100">
              <QuizPreview />
            </div>

            {/* Article continues */}
            <div className="bg-white px-8 py-6">
              <p className="text-slate-500 text-sm leading-relaxed">
                Once you know your homeowner type, you can prioritise the right
                tasks and avoid spending money on things that don't match your
                situation. Spring is generally the best time to assess any
                damage from winter storms and schedule professional inspections
                before the busy summer season...
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-indigo-600 uppercase tracking-widest mb-2">
              Simple Process
            </p>
            <h2 className="text-4xl font-bold text-slate-900">
              How It Works
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Create Your Quiz",
                body: "Build a simple 5-question quiz designed to engage visitors and uncover insights about their needs.",
                icon: "✏️",
              },
              {
                step: "2",
                title: "Embed It Anywhere",
                body: "Add your quiz to any page using a simple embed code. It works on landing pages, blogs, and service pages.",
                icon: "🔗",
              },
              {
                step: "3",
                title: "Capture Leads Automatically",
                body: "Visitors enter their email to see their results. Every submission becomes a new lead for your business.",
                icon: "🎯",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm text-center"
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <div className="w-8 h-8 bg-indigo-600 text-white text-sm font-bold rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Quizzes Work */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold text-indigo-600 uppercase tracking-widest mb-2">
              Why It Works
            </p>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Quizzes outperform
              <br />
              traditional lead forms
            </h2>
            <p className="text-slate-500 mb-8">
              Interactive quizzes consistently outperform static forms because
              they feel personal, not transactional.
            </p>
            <ul className="space-y-3">
              {[
                "People love discovering something about themselves",
                "Engagement is much higher than static forms",
                "Personalized results create instant value",
                "You collect better data about your audience",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span className="text-slate-600 text-sm">{point}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm font-semibold text-slate-900">
              LeadQuiz turns curiosity into conversion.
            </p>
          </div>
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-600">Quiz completion rate</span>
                  <span className="font-semibold text-slate-900">73%</span>
                </div>
                <div className="h-2 bg-slate-200 rounded-full">
                  <div className="h-2 bg-indigo-500 rounded-full w-[73%]" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-600">Static form conversion</span>
                  <span className="font-semibold text-slate-900">23%</span>
                </div>
                <div className="h-2 bg-slate-200 rounded-full">
                  <div className="h-2 bg-rose-400 rounded-full w-[23%]" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-600">Email capture rate</span>
                  <span className="font-semibold text-slate-900">61%</span>
                </div>
                <div className="h-2 bg-slate-200 rounded-full">
                  <div className="h-2 bg-green-500 rounded-full w-[61%]" />
                </div>
              </div>
            </div>
            <p className="text-xs text-slate-400 mt-6 text-center">
              Industry benchmark data
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-indigo-600 uppercase tracking-widest mb-2">
              Features
            </p>
            <h2 className="text-4xl font-bold text-slate-900">
              Built for Lead Generation
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                icon: "🧩",
                title: "Embeddable Quiz Widget",
                body: "Drop a quiz directly into your website with a simple embed snippet.",
              },
              {
                icon: "📧",
                title: "Email Capture Before Results",
                body: "Collect emails before showing personalized quiz results.",
              },
              {
                icon: "🏷️",
                title: "Result Categories",
                body: "Deliver tailored insights that make the experience feel personal.",
              },
              {
                icon: "📊",
                title: "Lead Data Collection",
                body: "Capture emails, quiz responses, and result types for better follow-up.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex gap-4"
              >
                <div className="text-2xl flex-shrink-0">{f.icon}</div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">{f.title}</h3>
                  <p className="text-slate-500 text-sm">{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Where to Use */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-sm font-semibold text-indigo-600 uppercase tracking-widest mb-2">
              Flexible
            </p>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Where You Can Use LeadQuiz
            </h2>
            <p className="text-slate-500 mb-6">
              LeadQuiz works almost anywhere on your site.
            </p>
            <ul className="space-y-2">
              {[
                "Landing pages",
                "Blog articles",
                "Service pages",
                "Resource hubs",
                "Campaign pages",
              ].map((p) => (
                <li key={p} className="flex items-center gap-2 text-slate-700">
                  <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full" />
                  {p}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-slate-500">
              Add a quiz wherever your audience is already engaging.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-4">
              Example Use Cases
            </p>
            <div className="space-y-3">
              {[
                { industry: "Home Services", quiz: "What Type of Homeowner Are You?" },
                { industry: "Marketing Agencies", quiz: "What's Your Marketing Maturity Score?" },
                { industry: "Travel Brands", quiz: "What's Your Travel Style?" },
                { industry: "SaaS Companies", quiz: "How Ready Is Your Team for Automation?" },
              ].map((uc) => (
                <div
                  key={uc.industry}
                  className="border border-slate-100 rounded-xl p-4 bg-slate-50 hover:border-indigo-200 transition-colors"
                >
                  <p className="text-xs font-semibold text-indigo-600 mb-0.5">
                    {uc.industry}
                  </p>
                  <p className="text-sm font-medium text-slate-800">
                    "{uc.quiz}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Embed CTA */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Embed in Minutes
            </h2>
            <p className="text-slate-500 mb-4">
              LeadQuiz gives you a simple embed snippet you can add to any page.
              Just paste the code into your site or deploy it through Google Tag
              Manager.
            </p>
            <p className="text-slate-500">
              Your quiz appears instantly and starts capturing leads.
            </p>
          </div>
          <div className="bg-slate-900 rounded-2xl p-6 font-mono text-sm">
            <p className="text-slate-500 text-xs mb-3">{`<!-- LeadQuiz Embed -->`}</p>
            <p className="text-green-400">{`<script`}</p>
            <p className="text-yellow-300 pl-4">{`  src="https://leadquiz.io/embed.js"`}</p>
            <p className="text-yellow-300 pl-4">{`  data-quiz-id="abc123"`}</p>
            <p className="text-green-400">{`></script>`}</p>
            <p className="text-green-400 mt-2">{`<div`}</p>
            <p className="text-yellow-300 pl-4">{`  class="leadquiz-widget"`}</p>
            <p className="text-yellow-300 pl-4">{`  data-quiz="abc123"`}</p>
            <p className="text-green-400">{`></div>`}</p>
          </div>
        </div>
      </section>

      {/* Designed for Conversion */}
      <section className="py-20 px-6 bg-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Designed for Conversion
          </h2>
          <p className="text-slate-500 text-lg mb-3">
            LeadQuiz is built to turn curiosity into action.
          </p>
          <p className="text-slate-500">
            Visitors answer a few quick questions, enter their email to see
            results, and instantly become a new lead in your funnel. No
            friction. No complicated forms. Just interactive engagement.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 bg-indigo-600 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-4">
            Start Turning Traffic Into Leads
          </h2>
          <p className="text-indigo-200 text-lg mb-10">
            Create your first lead-capture quiz and embed it on your site in
            minutes.
          </p>
          <Link
            href="/dashboard"
            className="inline-block bg-white text-indigo-700 text-base font-bold px-10 py-4 rounded-xl hover:bg-indigo-50 transition-colors shadow-lg"
          >
            Create Your Quiz
          </Link>
          <p className="text-indigo-300 text-sm mt-4">
            Start building your first quiz today.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-100 py-8 px-6 text-center text-sm text-slate-400">
        <span className="font-semibold text-slate-900">
          Lead<span className="text-indigo-600">Quiz</span>
        </span>
        <span className="mx-2">—</span>
        Convert visitors into leads with embeddable quizzes.
      </footer>
    </div>
  );
}
