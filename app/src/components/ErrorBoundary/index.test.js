import React from 'react';
import { mount } from 'enzyme';

import ErrorBoundary from '.';

describe('ErrorBoundary', () => {
  it('should render children', () => {
    expect(mount(<ErrorBoundary>content</ErrorBoundary>))
      .toMatchSnapshot();
  });

  it('should render error view when children throws error', () => {
    function BuggyComponent() {
      throw new Error();
    }

    expect(mount(<ErrorBoundary><BuggyComponent /></ErrorBoundary>))
      .toMatchSnapshot();
  });
});
