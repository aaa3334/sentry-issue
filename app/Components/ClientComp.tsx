"use client";

import React, { useEffect, useState } from "react";

const ClientComp = () => {
  const [clientData, setClientData] = useState<string | null>(null);

  useEffect(() => {
    // Client-side specific logic
    setClientData("This data is fetched on the client side.");
  }, []);

  return (
    <div>
      <h1>Client Component</h1>
      <p>{clientData}</p>
    </div>
  );
};

export default ClientComp;
