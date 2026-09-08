"use client";

import { useState } from "react";

const steps = ["Bring the Uncharged Capacitor", "Pull the main lever", "Wait for the current signal", "Compare it with the room clue", "Send one matching digit", "Repeat until seven signals pass", "Charge and retrieve the capacitor"];

export function BatteryChecklist() {
  const [done, setDone] = useState<boolean[]>(Array(7).fill(false));
  return <aside className="signal-check" aria-label="Seven-signal checklist">
    <div className="signal-head"><span>7 generated signals</span><strong>{done.filter(Boolean).length}/7</strong></div>
    <p className="warning">No universal code exists. One wrong digit resets the equipment.</p>
    {steps.map((step, index) => <label key={step}><input type="checkbox" checked={done[index]} onChange={() => setDone(done.map((value, i) => i === index ? !value : value))}/><span><b>0{index + 1}</b>{step}</span></label>)}
  </aside>;
}
