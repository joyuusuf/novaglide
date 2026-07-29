import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-line mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted">
          &copy; {new Date().getFullYear()} NovaGlide Tech Solutions. All rights reserved.
        </p>
        <p className="text-sm text-muted">Built and maintained in Ibadan, Nigeria.</p>
      </div>
    </footer>
  );
}
