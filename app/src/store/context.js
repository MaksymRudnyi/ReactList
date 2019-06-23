import React from 'react';

import DefaultContext from './list';

export const AppContext = React.createContext(DefaultContext);

export const AppContextProvider = AppContext.Provider;
export const AppContextConsumer = AppContext.Consumer;

export const withAppContext = (WrappedComponent) => {
  class WithAppContext extends React.Component {
    render() {
      return (
        <AppContextConsumer>
          {({ ...props }) => (
            <WrappedComponent context={props} {...this.props} />
          )}
        </AppContextConsumer>
      );
    }
  }

  WithAppContext.displayName = `WithAppContext(${getDisplayName(
    WrappedComponent,
  )})`;

  return WithAppContext;
};

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}
