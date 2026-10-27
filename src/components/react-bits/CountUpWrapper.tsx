import React from "react";
import CountUp from "./CountUp/CountUp";

interface Props {
  to: number;
  from?: number;
  duration?: number;
  className?: string;
  suffix?: string;
}

export default function CountUpWrapper({ to, from = 0, duration = 1.8, className = "", suffix = "" }: Props) {
  return (
    <span className={`inline-flex items-center ${className}`}>
      <CountUp to={to} from={from} duration={duration} />
      {suffix && <span>{suffix}</span>}
    </span>
  );
}
