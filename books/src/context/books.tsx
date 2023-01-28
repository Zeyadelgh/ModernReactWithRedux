import { createContext, useState } from 'react';

type IValueToShare = {
  count: number;
  incrementCount: () => void;
};

type IBooksContext = [
  IValueToShare[],
  React.Dispatch<React.SetStateAction<IValueToShare[]>>
];
const BooksContext = createContext<IBooksContext>([[], () => null]);

function Provider({ children }: any) {
  const [count, setCount] = useState(5);

  const valueToShare: IValueToShare = {
    count,
    incrementCount: () => {
      setCount(count + 1);
    },
  };
  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
}

export { Provider };
export default BooksContext;
