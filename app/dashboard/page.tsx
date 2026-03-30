"use client";

import { useState } from "react";
import Link from "next/link";

type Question = {
  id: number;
  text: string;
  options: string[];
};

type ResultCategory = {
  id: string;
  title: string;
  description: string;
  emoji: string;
};

const DEFAULT_QUESTIONS: Question[] = [
  {
    id: 1,
    text: "Question 1",
    options: ["Option A", "Option B", "Option C", "Option D"],
  },
  {
    id: 2,
    text: "Question 2",
    options: ["Option A", "Option B", "Option C", "Option D"],
  },
  {
    id: 3,
    text: "Question 3",
    options: ["Option A", "Option B", "Option C", "Option D"],
  },
  {
    id: 4,
    text: "Question 4",
    options: ["Option A", "Option B", "Option C", "Option D"],
  },
  {
    id: 5,
    text: "Question 5",
    options: ["Option A", "Option B", "Option C", "Option D"],
  },
];

const DEFAULT_RESULTS: ResultCategory[] = [
  {
    id: "a",
    emoji: "🏆",
    title: "Result Category A",
    description: "Description for result category A.",
  },
  {
    id: "b",
    emoji: "🔧",
    title: "Result Category B",
    description: "Description for result category B.",
  },
  {
    id: "c",
    emoji: "📋",
    title: "Result Category C",
    description: "Description for result category C.",
  },
  {
    id: "d",
    emoji: "📚",
    title: "Result Category D",
    description: "Description for result category D.",
  },
];

function generateId(): string {
  return Math.random().toString(36).slice(2, 9);
}

type Tab = "questions" | "results" | "embed";

export default function Dashboard() {
  const [quizTitle, setQuizTitle] = useState("What Type of Homeowner Are You?");
  const [quizSubtitle, setQuizSubtitle] = useState("Take the 2-minute quiz 👇");
  const [questions, setQuestions] = useState<Question[]>(DEFAULT_QUESTIONS);
  const [results, setResults] = useState<ResultCategory[]>(DEFAULT_RESULTS);
  const [tab, setTab] = useState<Tab>("questions");
  const [quizId] = useState(() => generateId());
  const [saved, setSaved] = useState(false);

  function updateQuestion(id: number, field: "text", value: string): void;
  function updateQuestion(id: number, field: "options", value: string[]): void;
  function updateQuestion(
    id: number,
    field: "text" | "options",
    value: string | string[]
  ) {
    setQuestions((qs) =>
      qs.map((q) =>
        q.id === id ? { ...q, [field]: value } : q
      )
    );
  }

  function updateOption(qId: number, optIdx: number, value: string) {
    setQuestions((qs) =>
      qs.map((q) =>
        q.id === qId
          ? { ...q, options: q.options.map((o, i) => (i === optIdx ? value : o)) }
          : q
      )
    );
  }

  function addQuestion() {
    if (questions.length >= 10) return;
    setQuestions((qs) => [
      ...qs,
      {
        id: Date.now(),
        text: `Question ${qs.length + 1}`,
        options: ["Option A", "Option B", "Option C", "Option D"],
      },
    ]);
  }

  function removeQuestion(id: number) {
    if (questions.length <= 1) return;
    setQuestions((qs) => qs.filter((q) => q.id !== id));
  }

  function updateResult(
    id: string,
    field: keyof ResultCategory,
    value: string
  ) {
    setResults((rs) =>
      rs.map((r) => (r.id === id ? { ...r, [field]: value } : r))
    );
  }

  function handleSave() {
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }

  const embedSnippet = `<script src="https://leadquiz.io/embed.js" data-quiz-id="${quizId}"></script>\n<div class="leadquiz-widget" data-quiz="${quizId}"></div>`;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Nav */}
      <nav className="border-b border-slate-200 bg-white sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/" className="text-lg font-bold text-slate-900">
            Lead<span className="text-indigo-600">Quiz</span>
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-sm text-slate-500 hidden sm:block">
              Quiz Builder
            </span>
            <button
              onClick={handleSave}
              className="bg-indigo-600 text-white text-sm font-semibold px-5 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              {saved ? "✓ Saved!" : "Save Quiz"}
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-slate-900 mb-1">
            Quiz Builder
          </h1>
          <p className="text-slate-500 text-sm">
            Customize your quiz, then grab the embed code to add it anywhere.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left panel */}
          <div className="lg:col-span-2 space-y-4">
            {/* Quiz info */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6">
              <h2 className="font-semibold text-slate-900 mb-4">
                Quiz Details
              </h2>
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1">
                    Quiz Title
                  </label>
                  <input
                    value={quizTitle}
                    onChange={(e) => setQuizTitle(e.target.value)}
                    className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1">
                    Subtitle / Call-to-action
                  </label>
                  <input
                    value={quizSubtitle}
                    onChange={(e) => setQuizSubtitle(e.target.value)}
                    className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
              <div className="flex border-b border-slate-200">
                {(["questions", "results", "embed"] as Tab[]).map((t) => (
                  <button
                    key={t}
                    onClick={() => setTab(t)}
                    className={`flex-1 py-3 text-sm font-medium capitalize transition-colors ${
                      tab === t
                        ? "text-indigo-600 border-b-2 border-indigo-600 bg-indigo-50"
                        : "text-slate-500 hover:text-slate-700"
                    }`}
                  >
                    {t === "questions"
                      ? `Questions (${questions.length})`
                      : t === "results"
                      ? `Results (${results.length})`
                      : "Embed Code"}
                  </button>
                ))}
              </div>

              <div className="p-6">
                {/* Questions tab */}
                {tab === "questions" && (
                  <div className="space-y-6">
                    {questions.map((q, qIdx) => (
                      <div
                        key={q.id}
                        className="border border-slate-100 rounded-xl p-4 bg-slate-50"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">
                            Question {qIdx + 1}
                          </span>
                          {questions.length > 1 && (
                            <button
                              onClick={() => removeQuestion(q.id)}
                              className="text-xs text-rose-400 hover:text-rose-600"
                            >
                              Remove
                            </button>
                          )}
                        </div>
                        <input
                          value={q.text}
                          onChange={(e) =>
                            updateQuestion(q.id, "text", e.target.value)
                          }
                          placeholder="Enter your question..."
                          className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm mb-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white"
                        />
                        <div className="grid sm:grid-cols-2 gap-2">
                          {q.options.map((opt, oIdx) => (
                            <input
                              key={oIdx}
                              value={opt}
                              onChange={(e) =>
                                updateOption(q.id, oIdx, e.target.value)
                              }
                              placeholder={`Option ${oIdx + 1}`}
                              className="border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white"
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                    {questions.length < 10 && (
                      <button
                        onClick={addQuestion}
                        className="w-full border-2 border-dashed border-slate-200 rounded-xl py-3 text-sm text-slate-400 hover:border-indigo-300 hover:text-indigo-500 transition-colors"
                      >
                        + Add Question
                      </button>
                    )}
                  </div>
                )}

                {/* Results tab */}
                {tab === "results" && (
                  <div className="space-y-4">
                    <p className="text-sm text-slate-500 mb-2">
                      Define the result categories visitors will receive based
                      on their answers.
                    </p>
                    {results.map((r) => (
                      <div
                        key={r.id}
                        className="border border-slate-100 rounded-xl p-4 bg-slate-50"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <input
                            value={r.emoji}
                            onChange={(e) =>
                              updateResult(r.id, "emoji", e.target.value)
                            }
                            className="w-14 border border-slate-200 rounded-lg px-2 py-2 text-center text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
                          />
                          <input
                            value={r.title}
                            onChange={(e) =>
                              updateResult(r.id, "title", e.target.value)
                            }
                            placeholder="Result title..."
                            className="flex-1 border border-slate-200 rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
                          />
                        </div>
                        <textarea
                          value={r.description}
                          onChange={(e) =>
                            updateResult(r.id, "description", e.target.value)
                          }
                          placeholder="Describe this result category..."
                          rows={2}
                          className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none"
                        />
                      </div>
                    ))}
                  </div>
                )}

                {/* Embed tab */}
                {tab === "embed" && (
                  <div>
                    <p className="text-sm text-slate-500 mb-4">
                      Copy this snippet and paste it into any page where you
                      want the quiz to appear.
                    </p>
                    <div className="bg-slate-900 rounded-xl p-4 font-mono text-xs text-green-400 whitespace-pre mb-4 overflow-x-auto">
                      {embedSnippet}
                    </div>
                    <button
                      onClick={() =>
                        navigator.clipboard.writeText(embedSnippet)
                      }
                      className="w-full border border-slate-200 text-slate-700 text-sm font-medium py-2.5 rounded-lg hover:bg-slate-50 transition-colors"
                    >
                      Copy Embed Code
                    </button>
                    <div className="mt-4 bg-indigo-50 border border-indigo-100 rounded-xl p-4">
                      <p className="text-xs font-semibold text-indigo-700 mb-1">
                        Pro tip
                      </p>
                      <p className="text-xs text-indigo-600">
                        You can also deploy this via Google Tag Manager by
                        adding it as a Custom HTML tag — no developer needed.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right panel: preview + stats */}
          <div className="space-y-4">
            {/* Live preview card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5">
              <h2 className="font-semibold text-slate-900 mb-1 text-sm">
                Live Preview
              </h2>
              <p className="text-xs text-slate-400 mb-4">
                This is how your quiz header will appear.
              </p>
              <div className="rounded-xl border border-indigo-100 overflow-hidden">
                <div className="bg-indigo-600 px-4 py-3">
                  <p className="text-xs font-semibold text-indigo-200 uppercase tracking-widest mb-0.5">
                    2-Minute Quiz
                  </p>
                  <h3 className="text-white font-bold text-sm">
                    {quizTitle || "Your Quiz Title"}
                  </h3>
                  {quizSubtitle && (
                    <p className="text-indigo-200 text-xs mt-0.5">
                      {quizSubtitle}
                    </p>
                  )}
                </div>
                <div className="px-4 py-3 bg-slate-50">
                  <div className="space-y-1.5">
                    {questions.slice(0, 3).map((q, i) => (
                      <div
                        key={i}
                        className="bg-white border border-slate-100 rounded-lg px-3 py-2 text-xs text-slate-500"
                      >
                        {i + 1}. {q.text}
                      </div>
                    ))}
                    {questions.length > 3 && (
                      <p className="text-xs text-slate-400 text-center py-1">
                        +{questions.length - 3} more questions
                      </p>
                    )}
                  </div>
                </div>
                <div className="px-4 py-2 bg-white border-t border-slate-100">
                  <div className="bg-indigo-600 text-white text-xs font-semibold text-center py-2 rounded-lg">
                    Start Quiz
                  </div>
                </div>
              </div>
            </div>

            {/* Quiz stats */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5">
              <h2 className="font-semibold text-slate-900 mb-4 text-sm">
                Quiz Summary
              </h2>
              <div className="space-y-3">
                {[
                  { label: "Questions", value: questions.length },
                  { label: "Result categories", value: results.length },
                  { label: "Est. completion time", value: `~${questions.length * 15}s` },
                  { label: "Quiz ID", value: quizId },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-center justify-between text-sm"
                  >
                    <span className="text-slate-500">{stat.label}</span>
                    <span className="font-semibold text-slate-900">
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA to embed */}
            <div className="bg-indigo-600 rounded-2xl p-5 text-white text-center">
              <p className="font-bold mb-1">Ready to capture leads?</p>
              <p className="text-indigo-200 text-xs mb-4">
                Grab your embed code and add this quiz to any page.
              </p>
              <button
                onClick={() => setTab("embed")}
                className="bg-white text-indigo-700 text-sm font-semibold px-5 py-2 rounded-lg hover:bg-indigo-50 transition-colors w-full"
              >
                Get Embed Code
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
