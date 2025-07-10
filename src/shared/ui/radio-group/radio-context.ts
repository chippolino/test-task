'use client';
import { createContext } from 'react';

export type RadioContextValue = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isRadioSelected: (value: string) => boolean;
};

export const RadioContext = createContext<RadioContextValue | null>(null);
