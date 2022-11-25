// Vendors
import React, { ReactNode, cloneElement } from "react";

const FakeFragment: React.FC<{ children?: JSX.Element }> = ({ children }) => (
  <>{children}</>
);

export type ProviderWrapperProps = {
  providers: ReactNode[];
  children: ReactNode | undefined;
};

const ProviderWrapper: React.FC<ProviderWrapperProps> = ({
  providers,
  children,
}) => {
  const LastProvider = providers.reduce((ParentProvider, ChildrenProvider) => {
    return cloneElement(ParentProvider, { children: ChildrenProvider });
  }, <FakeFragment />);

  const LastProviderWithChildre = cloneElement(LastProvider, { children });

  return LastProviderWithChildre;
};

export default ProviderWrapper;
