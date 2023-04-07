// Vendors
import React, { FC, ReactNode, useMemo, useState } from "react";
// Helpers
import { deepCopyObject } from "helpers/deepCopyObject";

export type FakeFragmentProps = {
  children?: JSX.Element;
};

export const FakeFragment: FC<FakeFragmentProps> = ({ children }) => (
  <>{children}</>
);

export type ProviderWrapperElement = {
  provider: React.FC<any>;
  props: { children?: ReactNode | undefined } & Record<string, any>;
};

export type ProviderWrapperProps = {
  providers: ProviderWrapperElement[];
  children: ReactNode | undefined;
};

const ProviderWrapper: FC<ProviderWrapperProps> = ({ providers, children }) => {
  const [fallbackProvider] = useState<ProviderWrapperElement>({
    provider: FakeFragment,
    props: { children },
  });

  const parentProvider = useMemo(() => {
    const tempProviders = providers.map(
      (el) => deepCopyObject(el) as ProviderWrapperElement
    );

    const { provider: YoungestProvider, props: youngestProps = {} } =
      tempProviders.at(-1) ?? fallbackProvider;

    let auxProvider = (
      <YoungestProvider {...youngestProps}>{children}</YoungestProvider>
    );

    for (let index = tempProviders.length - 2; index >= 0; index--) {
      const { provider: CurrentProvider, props } = tempProviders[index];
      auxProvider = <CurrentProvider {...props}>{auxProvider}</CurrentProvider>;
    }

    return auxProvider;
  }, [providers]);

  return parentProvider;
};

export default ProviderWrapper;
