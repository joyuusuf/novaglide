'use client';

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useAuth } from "@/context/AuthContext";

const SERVICE_TYPES = [
  "Website / Web App",
  "Dashboard / Admin Tool",
  "Process Automation",
  "Something else",
];

export default function RequestForm() {
  const { user } = useAuth();
  const router = useRouter();

  const [serviceType, setServiceType] = useState(SERVICE_TYPES[0]);
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [budget, setBudget] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await addDoc(collection(db, "requests"), {
        uid: user.uid,
        userEmail: user.email,
        userName: user.displayName || "",
        serviceType,
        title,
        details,
        budget,
        status: "new",
        createdAt: serverTimestamp(),
      });
      router.push("/dashboard");
    } catch (err) {
      setError("Couldn't submit your request. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
      <div className="mb-8">
        <p className="text-xs uppercase tracking-widest text-purple-300 mb-2">New request</p>
        <h1 className="text-2xl sm:text-3xl font-bold text-white">Tell us what you need</h1>
        <p className="text-sm text-muted mt-2">
          Plain language is fine. The more detail you give, the faster we can scope this.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="glass-panel rounded-2xl p-6 sm:p-8 flex flex-col gap-5">
        <div>
          <label className="block text-xs text-muted mb-1.5">Type of service</label>
          <select
            value={serviceType}
            onChange={(e) => setServiceType(e.target.value)}
            className="w-full rounded-xl bg-white/5 border border-line px-4 py-3 text-white text-sm outline-none focus:border-purple-400/50 transition-colors"
          >
            {SERVICE_TYPES.map((t) => (
              <option key={t} value={t} className="bg-[#14141C]">
                {t}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs text-muted mb-1.5">Give it a short title</label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full rounded-xl bg-white/5 border border-line px-4 py-3 text-white text-sm outline-none focus:border-purple-400/50 transition-colors"
            placeholder="e.g. Booking site for my salon"
          />
        </div>

        <div>
          <label className="block text-xs text-muted mb-1.5">Describe what you need</label>
          <textarea
            required
            rows={5}
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            className="w-full rounded-xl bg-white/5 border border-line px-4 py-3 text-white text-sm outline-none focus:border-purple-400/50 transition-colors resize-none"
            placeholder="What problem are you trying to solve? Who will use it?"
          />
        </div>

        <div>
          <label className="block text-xs text-muted mb-1.5">Budget range (optional)</label>
          <input
            type="text"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="w-full rounded-xl bg-white/5 border border-line px-4 py-3 text-white text-sm outline-none focus:border-purple-400/50 transition-colors"
            placeholder="e.g. ₦200,000 - ₦500,000"
          />
        </div>

        {error && <p className="text-sm text-red-400">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="mt-2 w-full sm:w-fit px-8 py-3 rounded-full font-medium text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:opacity-90 transition-opacity disabled:opacity-50"
        >
          {loading ? "Submitting..." : "Submit request"}
        </button>
      </form>
    </div>
  );
}
