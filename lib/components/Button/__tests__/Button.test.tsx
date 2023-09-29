import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { Button } from '..';

describe('Buttom Component Tests UI', () => {
  it('should be verify render correct title Button', () => {
    render(
      <Button bgColor="#000fff" font="bold" title="Entrar" titleColor="#fff" />,
    );

    expect(screen.getByText('Entrar')).toBeTruthy();
  });

  it('shuld be render the correct background style Button', () => {
    render(
      <Button bgColor="#000fff" font="bold" title="Entrar" titleColor="#fff" />,
    );

    const button = screen.getByTestId('button');

    expect(button.props.style.backgroundColor).toBe('#000fff');
  });

  it('should be render the correct height button', () => {
    render(
      <Button
        bgColor="#000fff"
        font="bold"
        title="Entrar"
        titleColor="#fff"
        height={40}
      />,
    );

    const button = screen.getByTestId('button');

    expect(button.props.style.height).toBe(40);
  });

  it('should be render the default disabledColor button', () => {
    render(
      <Button
        bgColor="#000fff"
        disabled
        font="bold"
        title="Entrar"
        titleColor="#fff"
        height={40}
      />,
    );

    const button = screen.getByTestId('button');

    expect(button.props.style.backgroundColor).toBe('#B0AFAF');
  });
});
