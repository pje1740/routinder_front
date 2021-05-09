import React from 'react';
import '../styles/tailwind.css';

export interface ButtonProps {
  label: string;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  // primary = false,
  label,
}: ButtonProps) => (
  <button
    className="font-mono bg-pink-400 p-2 hover:bg-pink-500 rounded-lg text-white outline-none"
    type="button"
  >
    {label}
  </button>
);
