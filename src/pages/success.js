import React, { useState, useEffect } from "react";

import { useRouter } from "next/router";

const Success = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 2000); // 1-second delay

    return () => clearTimeout(timer); // Cleanup the timer
  }, [router]);

  return (
    <div style={{ textAlign: "center", marginTop: "20vh" }}>
      <h1>Payment Successful!</h1>
      <p>Redirecting you to the dashboard...</p>
    </div>
  );
};

export default Success;
