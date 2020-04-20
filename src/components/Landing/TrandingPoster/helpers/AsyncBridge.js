import React, { useState } from "react";

export const AsyncBridge = ({
  promise,
  children,
  resolved,
  pending,
}) => {
  const [resolvedWith, setResolvedWith] = useState(0);

  promise.then(value => setResolvedWith(value));

  return resolvedWith 
    ? React.cloneElement(resolved, resolvedWith)
    : pending;
};

export default AsyncBridge;
