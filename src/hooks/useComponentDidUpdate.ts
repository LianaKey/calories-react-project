import React from 'react';

export function useComponentDidUpdate(fn: () => void, deps: any[]) {
  const fired = React.useRef(false);

  React.useEffect(() => {
    if (!fired.current) {
      fired.current = true;
      return;
    }
    fn();
  }, [deps]);
}
