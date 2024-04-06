// src/components/PrivateRoute.js

import React from 'react';
import { useRouter } from 'next/router';
import { useAtom } from 'jotai';
/* import { userState } from 'store'; */
import { addCart } from 'store';

const PrivateRoute = ({ children }) => {
  const router = useRouter();
  const [user] = useAtom(addCart);

  React.useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [user, router]);

  return <>{children}</>;
};

export default PrivateRoute;
