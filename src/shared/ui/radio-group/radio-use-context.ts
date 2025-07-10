import { useContext } from 'react';
import { RadioContext } from './radio-context';

export const useRadioContext = () => {
  const radioContext = useContext(RadioContext);

  if (!radioContext) {
    throw new Error(`'useRadioContext' используется без  <RadioContext.Provider>`);
  }

  return radioContext;
};
