"use client";

import { useState } from "react";

const QUESTIONS = [
  {
    id: 1,
    text: "How long have you owned your home?",
    options: [
      "Less than 1 year",
      "1–5 years",
      "6–15 years",
      "More than 15 years",
    ],
  },
  {
    id: 2,
    text: "How would you describe your DIY skills?",
    options: [
      "I call a pro for everything",
      "I handle small fixes",
      "I tackle most repairs myself",
      "I'm very handy",
    ],
  },
  {
    id: 3,
    text: "How often do you schedule maintenance checks?",
    options: [
      "Rarely or never",
      "Only when something breaks",
      "Once a year",
      "Every season",
    ],
  },
  {
    id: 4,
    text: "What's your biggest home ownership challenge?",
    options: [
      "Finding reliable contractors",
      "Managing the budget",
      "Keeping up with tasks",
      "Understanding what needs doing",
    ],
  },
  {
    id: 5,
    text: "What's your home improvement priority?",
    options: [
      "Fixing urgent problems",
      "Improving energy efficiency",
      "Increasing resale value",
      "Making it more comfortable",
    ],
  },
];

const RESULTS: Record<string, { title: string; description: string; emoji: string }> = {
  proactive: {
    emoji: "🏆",
    title: "The Proactive Planner",
    description:
      "You stay ahead of your home's needs with regular maintenance and smart scheduling. You're protecting your investment and avoiding costly surprises.",
  },
  handyman: {
    emoji: "🔧",
    title: "The Handy Owner",
    description:
      "You're comfortable getting your hands dirty and handle most things yourself. You save money and know your home inside out.",
  },
  delegator: {
    emoji: "📋",
    title: "The Smart Delegator",
    description:
      "You know your limits and trust the right professionals to keep your home in top shape. Your home is well cared for even if you're not doing it yourself.",
  },
  learner: {
    emoji: "📚",
    title: "The Eager Learner",
    description:
      "You're building your homeownership knowledge. With the right guidance and checklists, you'll be managing your home confidently in no time.",
  },
};

function getResult(answers: number[]): string {
  const avg = answers.reduce((a, b) => a + b, 0) / answers.length;
  if (avg >= 3) return "proactive";
  if (avg >= 2) return "handyman";
  if (avg >= 1) return "delegator";
  return "learner";
}

export default function QuizPreview() {
  const [step, setStep] = useState<"quiz" | "email" | "result">("quiz");
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const question = QUESTIONS[current];
  const progress = ((current + (step === "email" ? 1 : 0)) / QUESTIONS.length) * 100;

  function handleOption(idx: number) {
    setSelected(idx);
  }

  function handleNext() {
    if (selected === null) return;
    const newAnswers = [...answers, selected];
    setAnswers(newAnswers);
    setSelected(null);
    if (current + 1 < QUESTIONS.length) {
      setCurrent(current + 1);
    } else {
      setStep("email");
    }
  }

  function handleEmailSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.includes("@") || !email.includes(".")) {
      setEmailError("Please enter a valid email address.");
      return;
    }
    setEmailError("");
    setStep("result");
  }

  function handleRestart() {
    setStep("quiz");
    setCurrent(0);
    setAnswers([]);
    setSelected(null);
    setEmail("");
  }

  const resultKey = step === "result" ? getResult(answers) : null;
  const result = resultKey ? RESULTS[resultKey] : null;

  return (
    <div className="rounded-xl border border-indigo-100 bg-white overflow-hidden shadow-sm">
      {/* Header */}
      <div className="bg-indigo-600 px-5 py-4">
        <p className="text-xs font-semibold text-indigo-200 uppercase tracking-widest mb-1">
          2-Minute Quiz
        </p>
        <h3 className="text-white font-bold text-base">
          WHAT TYPE OF HOMEOWNER ARE YOU? 👇
        </h3>
      </div>

      {/* Progress bar */}
      {step !== "result" && (
        <div className="h-1.5 bg-slate-100">
          <div
            className="h-1.5 bg-indigo-500 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      <div className="px-5 py-5">
        {step === "quiz" && (
          <>
            <div className="flex items-center justify-between mb-4">
              <p className="text-xs text-slate-400 font-medium">
                Question {current + 1} of {QUESTIONS.length}
              </p>
            </div>
            <p className="font-semibold text-slate-900 text-sm mb-4">
              {question.text}
            </p>
            <div className="space-y-2 mb-5">
              {question.options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleOption(idx)}
                  className={`w-full text-left text-sm px-4 py-3 rounded-lg border transition-all ${
                    selected === idx
                      ? "border-indigo-500 bg-indigo-50 text-indigo-700 font-medium"
                      : "border-slate-200 text-slate-700 hover:border-indigo-300 hover:bg-slate-50"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
            <button
              onClick={handleNext}
              disabled={selected === null}
              className="w-full bg-indigo-600 text-white text-sm font-semibold py-3 rounded-lg hover:bg-indigo-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              {current + 1 === QUESTIONS.length ? "See My Results" : "Next →"}
            </button>
          </>
        )}

        {step === "email" && (
          <form onSubmit={handleEmailSubmit}>
            <div className="text-center mb-5">
              <div className="text-3xl mb-3">🎉</div>
              <h4 className="font-bold text-slate-900 mb-1">
                You're almost there!
              </h4>
              <p className="text-sm text-slate-500">
                Enter your email to see your personalized results.
              </p>
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm mb-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            {emailError && (
              <p className="text-xs text-rose-500 mb-2">{emailError}</p>
            )}
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white text-sm font-semibold py-3 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Show My Results
            </button>
            <p className="text-xs text-slate-400 text-center mt-2">
              No spam. Unsubscribe anytime.
            </p>
          </form>
        )}

        {step === "result" && result && (
          <div className="text-center">
            <div className="text-4xl mb-3">{result.emoji}</div>
            <h4 className="font-bold text-slate-900 text-lg mb-2">
              {result.title}
            </h4>
            <p className="text-sm text-slate-500 leading-relaxed mb-5">
              {result.description}
            </p>
            <button
              onClick={handleRestart}
              className="text-xs text-indigo-500 hover:text-indigo-700 underline"
            >
              Retake quiz
            </button>
          </div>
        )}
      </div>

      {/* Footer branding */}
      <div className="border-t border-slate-100 px-5 py-2.5 bg-slate-50 flex items-center justify-between">
        <span className="text-xs text-slate-400">
          Powered by{" "}
          <span className="font-semibold text-slate-600">LeadQuiz</span>
        </span>
        <span className="text-xs text-slate-400">Free to embed</span>
      </div>
    </div>
  );
}
