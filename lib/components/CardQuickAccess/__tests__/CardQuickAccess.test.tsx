import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { CardQuickAccess } from '..';

describe('Test CardQuickAccess', () => {
  it('should be render correct text card', () => {
    render(
      <CardQuickAccess bgColor="#000fff" title="My component" icon={<></>} />,
    );

    const cardTitle = screen.getByText('My component');

    expect(cardTitle).toBeTruthy();
  });

  it('should be render disabledColor card', () => {
    render(
      <CardQuickAccess
        bgColor="#000fff"
        disabledColor="#CCCCCC"
        title="My component"
        disabled
        icon={<></>}
      />,
    );

    const cardTitle = screen.getByTestId('CardQuickAccess');

    expect(cardTitle.props.style.backgroundColor).toBe('#CCCCCC');
  });

  it('should be render default disabledColor card', () => {
    render(
      <CardQuickAccess
        bgColor="#000fff"
        title="My component"
        disabled
        icon={<></>}
      />,
    );

    const cardTitle = screen.getByTestId('CardQuickAccess');

    expect(cardTitle.props.style.backgroundColor).toBe('#B0AFAF');
  });

  it('should be render default bgColor card', () => {
    render(<CardQuickAccess title="My component" icon={<></>} />);

    const cardTitle = screen.getByTestId('CardQuickAccess');

    expect(cardTitle.props.style.backgroundColor).toBe('#000fff');
  });
});
