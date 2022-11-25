// Vendors
import React, { ReactNode, useMemo, cloneElement } from "react";

const FakeFragment: React.FC<{ children?: JSX.Element }> = ({ children }) => {
  return <>{children}</>;
};

export type ProviderWrapperProps = {
  providers: ReactNode[];
  children: ReactNode | undefined;
};

const ProviderWrapper: React.FC<ProviderWrapperProps> = ({
  providers,
  children,
}) => {
  const WrappedProviders = useMemo<ReactNode>(() => {
    const LastProvider = providers.reduce((prev, CurrentComponent) => {
      return cloneElement(prev, { children: CurrentComponent });
    }, <FakeFragment />);

    const LastProviderWithChildre = cloneElement(LastProvider, { children });

    return LastProviderWithChildre;
  }, [providers]);

  return WrappedProviders;
};

export default ProviderWrapper;
