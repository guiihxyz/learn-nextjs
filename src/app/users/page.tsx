"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function User() {
    const [value, setValue] = useState('');
    const pathname = usePathname();

  return (
    <div>
        <h1>Hello, World!</h1>

        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="bg-zinc-800" placeholder="Digite" />
    </div>
  );
}
