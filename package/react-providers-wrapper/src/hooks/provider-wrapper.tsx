// Vendors
import React, { ReactNode, cloneElement, FC } from "react";

export type FakeFragmentProps = {
  children?: JSX.Element;
};

const FakeFragment: FC<FakeFragmentProps> = ({ children }) => <>{children}</>;

export type ProviderWrapperProps = {
  providers: ReactNode[];
  children: ReactNode | undefined;
};

const ProviderWrapper: FC<ProviderWrapperProps> = ({ providers, children }) => {
  const LastProvider = providers.reduce((ParentProvider, ChildrenProvider) => {
    return cloneElement(ParentProvider, { children: ChildrenProvider });
  }, <FakeFragment />);

  return cloneElement(LastProvider, { children });
};

export default ProviderWrapper;
