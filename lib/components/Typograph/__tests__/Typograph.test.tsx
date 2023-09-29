import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { Typograph } from '..';

describe('Typograph Test', () => {
  it('should be render the text message', () => {
    render(<Typograph>My text</Typograph>);

    const text = screen.getByText('My text');

    expect(text).toBeTruthy();
  });

  it('should be render the underline in text', () => {
    render(<Typograph underline>My text</Typograph>);

    const text = screen.getByText('My text');

    expect(text.props.style.textDecorationLine).toBe('underline');
  });
});
