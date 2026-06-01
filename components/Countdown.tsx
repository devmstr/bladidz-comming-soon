"use client";

import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(target: string): TimeLeft {
  const diff = Math.max(0, new Date(target).getTime() - Date.now());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function Countdown({ target }: { target: string }) {
  const [time, setTime] = useState<TimeLeft | null>(null);

  useEffect(() => {
    setTime(getTimeLeft(target));
    const id = setInterval(() => setTime(getTimeLeft(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  if (!time) return null;

  const units = [
    { label: "Jours", value: time.days },
    { label: "Heures", value: time.hours },
    { label: "Minutes", value: time.minutes },
    { label: "Secondes", value: time.seconds },
  ];

  return (
    <div className="flex items-end gap-2">
      {units.map((unit, i) => (
        <div key={unit.label} className="flex items-end gap-2">
          <div className="flex flex-col items-center">
            <span className="text-xs text-gray-500 tracking-widest uppercase mb-2">
              {unit.label}
            </span>
            <span className="text-5xl md:text-6xl font-black tabular-nums leading-none">
              {pad(unit.value)}
            </span>
          </div>
          {i < units.length - 1 && (
            <span className="text-5xl md:text-6xl font-black leading-none pb-0.5 text-white">
              :
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
