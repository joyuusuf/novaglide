'use client';

import React, { useEffect, useState } from "react";
import { collection, orderBy, query, onSnapshot, doc, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

const STATUSES = ["new", "in-progress", "completed"];

export default function AdminPanel() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, "requests"), orderBy("createdAt", "desc"));
    const unsub = onSnapshot(q, (snap) => {
      setRequests(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
      setLoading(false);
    });
    return () => unsub();
  }, []);

  const updateStatus = async (id, status) => {
    await updateDoc(doc(db, "requests", id), { status });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
      <p className="text-xs uppercase tracking-widest text-purple-300 mb-2">Admin</p>
      <h1 className="text-2xl sm:text-3xl font-bold text-white mb-8">Incoming requests</h1>

      {loading ? (
        <p className="text-muted text-sm">Loading...</p>
      ) : requests.length === 0 ? (
        <p className="text-muted text-sm">No requests yet.</p>
      ) : (
        <div className="overflow-x-auto glass-panel rounded-2xl">
          <table className="w-full text-sm min-w-[720px]">
            <thead>
              <tr className="text-left text-muted border-b border-line">
                <th className="px-5 py-4 font-medium">Title</th>
                <th className="px-5 py-4 font-medium">Type</th>
                <th className="px-5 py-4 font-medium">From</th>
                <th className="px-5 py-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((r) => (
                <tr key={r.id} className="border-b border-line last:border-0">
                  <td className="px-5 py-4 text-white">{r.title}</td>
                  <td className="px-5 py-4 text-muted">{r.serviceType}</td>
                  <td className="px-5 py-4 text-muted">{r.userEmail}</td>
                  <td className="px-5 py-4">
                    <select
                      value={r.status || "new"}
                      onChange={(e) => updateStatus(r.id, e.target.value)}
                      className="bg-white/5 border border-line rounded-full px-3 py-1.5 text-white text-xs outline-none capitalize"
                    >
                      {STATUSES.map((s) => (
                        <option key={s} value={s} className="bg-[#14141C] capitalize">
                          {s.replace("-", " ")}
                        </option>
                      ))}
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
