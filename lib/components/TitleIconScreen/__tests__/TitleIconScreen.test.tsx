import { render, screen } from '@testing-library/react-native';
import React from 'react';
import { Text } from 'react-native';
import { TitleIconScreen } from '..';

describe('TitleIconScreen Tests', () => {
  it("Should be render 'icon' component", () => {
    render(
      <TitleIconScreen
        icon={<Text>Icon render</Text>}
        title="My title section"
      />,
    );

    const iconRendered = screen.getByText('Icon render');

    expect(iconRendered).toBeTruthy();
  });

  it('Should be render the correct title', () => {
    render(
      <TitleIconScreen
        icon={<Text>Icon render</Text>}
        title="My title section"
      />,
    );

    const titleSection = screen.getByText('My title section');

    expect(titleSection).toBeTruthy();
  });
});
