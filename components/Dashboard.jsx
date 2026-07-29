'use client';

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { collection, query, where, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useAuth } from "@/context/AuthContext";
import { Plus } from "lucide-react";

const STATUS_STYLES = {
  new: "bg-blue-500/15 text-blue-300 border-blue-500/30",
  "in-progress": "bg-purple-500/15 text-purple-300 border-purple-500/30",
  completed: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
};

export default function Dashboard() {
  const { user } = useAuth();
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    const q = query(
      collection(db, "requests"),
      where("uid", "==", user.uid),
      orderBy("createdAt", "desc")
    );
    const unsub = onSnapshot(q, (snap) => {
      setRequests(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
      setLoading(false);
    });
    return () => unsub();
  }, [user]);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
        <div>
          <p className="text-xs uppercase tracking-widest text-purple-300 mb-2">Dashboard</p>
          <h1 className="text-2xl sm:text-3xl font-bold text-white">
            Welcome{user?.displayName ? `, ${user.displayName}` : ""}
          </h1>
        </div>
        <Link
          href="/request"
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full font-medium text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:opacity-90 transition-opacity w-full sm:w-auto"
        >
          <Plus size={16} /> New request
        </Link>
      </div>

      {loading ? (
        <p className="text-muted text-sm">Loading your requests...</p>
      ) : requests.length === 0 ? (
        <div className="glass-panel rounded-2xl p-10 text-center">
          <p className="text-white font-medium mb-2">No requests yet</p>
          <p className="text-sm text-muted mb-6">
            Once you submit a request, you&apos;ll see its status here.
          </p>
          <Link
            href="/request"
            className="inline-block px-6 py-2.5 rounded-full font-medium text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:opacity-90 transition-opacity"
          >
            Submit your first request
          </Link>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {requests.map((r) => (
            <div key={r.id} className="glass-panel rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <p className="text-white font-semibold">{r.title}</p>
                <p className="text-sm text-muted mt-1">{r.serviceType}</p>
              </div>
              <span
                className={`self-start sm:self-auto text-xs px-3 py-1.5 rounded-full border capitalize ${
                  STATUS_STYLES[r.status] || STATUS_STYLES.new
                }`}
              >
                {(r.status || "new").replace("-", " ")}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
