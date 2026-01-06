"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export default function TopProgress() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<number | null>(null);

  useLayoutEffect(() => {
    if (!pathname) return;

    // start progress on route change
    queueMicrotask(() => {
      setVisible(true);
      setProgress(4);
    });

    // increment progress gradually
    if (timerRef.current) window.clearInterval(timerRef.current);
    timerRef.current = window.setInterval(() => {
      setProgress((p) => Math.min(90, p + Math.random() * 8));
    }, 200) as unknown as number;

    // when navigation finishes (component re-renders), complete
    const finish = () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
      setProgress(100);
      setTimeout(() => {
        setVisible(false);
        setProgress(0);
      }, 300);
    };

    // use a small timeout to simulate finish after navigation
    const doneTimeout = window.setTimeout(finish, 800);

    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
      window.clearTimeout(doneTimeout);
    };
  }, [pathname]);

  if (!visible) return null;

  return (
    <div aria-hidden className="fixed left-0 top-0 w-full h-0 pointer-events-none z-50">
      <div className="mx-auto max-w-full px-6">
        <div
          className="h-0.5 rounded-full shadow-sm transition-all duration-150 ease-linear"
          style={{
            width: `${progress}%`,
            background: "linear-gradient(90deg,#06b6d4,#3b82f6)",
          }}
        />
      </div>
    </div>
  );
}
