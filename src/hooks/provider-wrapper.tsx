// Vendors
import React, { ReactNode, useMemo, cloneElement } from "react";

const FakeFragment: React.FC<{ children?: JSX.Element }> = ({ children }) => {
  return <>{children}</>;
};

const ProviderWrapper: React.FC<
  Pick<ReactNode, "children"> & { providers: JSX.Element[] }
> = ({ providers }) => {
  const WrappedProviders = useMemo<React.FunctionComponentElement<any>>(
    () =>
      providers.reduce((prev, CurrentComponent) => {
        return cloneElement(prev, { children: CurrentComponent });
      }, <FakeFragment />),
    []
  );

  return <WrappedProviders>{children}</WrappedProviders>;
};
export default ProviderWrapper;
