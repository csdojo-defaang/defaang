import { render, screen } from '@testing-library/react';

import { Button, variantStyles } from './Button';

describe('Button', () => {
  test('renders as a default Button if no href', () => {
    render(<Button href=''>Button</Button>);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Button');

    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });

  test('renders as a Link if href', () => {
    render(<Button href='/'>Button</Button>);

    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveTextContent('Button');

    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  test.each(['solid', 'outline'] as const)('renders as a %s Button', variant => {
    render(
      <Button href='' variant={variant}>
        Button
      </Button>,
    );

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass(variantStyles[variant].slate);
    expect(button).toHaveTextContent('Button');
  });

  test.each(['slate', 'blue', 'white'] as const)('renders as a %s Button', color => {
    render(
      <Button href='' color={color}>
        Button
      </Button>,
    );

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass(variantStyles.solid[color]);
    expect(button).toHaveTextContent('Button');
  });
});
