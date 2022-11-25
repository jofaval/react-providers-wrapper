import React from "react";

type MyProps = {
  providers: React.Component[];
};

type MyState = {
  Wrapped: React.Component | null;
};

class ProviderWrapper extends React.Component<MyProps, MyState> {
  state: MyState = {
    Wrapped: null,
  };

  computeProviders() {
    let Wrapped = this.props.providers[0];

    // FIXME: Find a way to pass children to class components similar to this
    const providersLen = this.props.providers.length;
    let Prev = this.props.providers[providersLen - 2];
    let current = this.props.providers[providersLen - 1];
    for (
      let providersIndex = providersLen - 2;
      providersIndex > 1;
      providersIndex--
    ) {
      Prev = <Prev children />;
      current = Prev;
      prev = this.props.providers[providersIndex - 1];
    }

    this.setState({ ...this.state, Wrapped });
  }

  componentDidUpdate({ providers }: MyProps) {
    if (providers !== this.props.providers) {
      this.computeProviders();
    }
  }

  render() {
    return this.state.Wrapped;
  }
}

export default ProviderWrapper;
