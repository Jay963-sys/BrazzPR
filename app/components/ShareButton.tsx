// components/ShareButton.tsx
"use client";

import { useState, useEffect } from "react";

export default function ShareButton({
  title,
  path,
}: {
  title: string;
  path?: string;
}) {
  const [url, setUrl] = useState("");

  useEffect(() => {
    // If a specific path is provided, construct the full URL. Otherwise, use current page.
    if (path) {
      setUrl(`${window.location.origin}${path}`);
    } else {
      setUrl(window.location.href);
    }
  }, [path]);

  const handleShare = async (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent triggering any parent links if accidentally nested
    e.stopPropagation();

    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          url: url,
        });
      } catch (error) {
        console.error("Error sharing content:", error);
      }
    } else {
      try {
        await navigator.clipboard.writeText(url);
        alert("Link copied to clipboard!");
      } catch (err) {
        console.error("Failed to copy link:", err);
      }
    }
  };

  return (
    <button
      onClick={handleShare}
      className="flex items-center gap-2 text-neutral-500 hover:text-red-600 text-xs font-bold uppercase tracking-widest transition-colors z-10 relative"
      aria-label="Share this article"
    >
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
        />
      </svg>
      Share
    </button>
  );
}
