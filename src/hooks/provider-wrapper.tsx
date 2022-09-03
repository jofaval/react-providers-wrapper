// Vendors
import React from "react";

const ProviderWrapper: React.FC<{ providers: JSX.Element[] }> = ({
  providers,
}) =>
  React.useMemo<JSX.Element>(() => {
    let Previous = providers[0];

    providers.slice(1).map((CurrentProvider) => {
      Previous = (
        <Previous>
          <CurrentProvider />
        </Previous>
      );
    });

    return Previous;
  }, []);

export default ProviderWrapper;
