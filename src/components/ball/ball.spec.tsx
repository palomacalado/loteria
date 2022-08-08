import { render, screen } from '@testing-library/react';
import Ball from './ball';

describe('Ball component', () => {
  it('Drawn ball', () => {
    const { container } = render(<Ball />);
    expect(container).toBeInTheDocument();
  });

  describe('Void list', () => {
    it('Void list', () => {
      render(<Ball />);

      const items = screen.queryAllByRole('listitem');
      expect(items).toHaveLength(0);
    });
  });
});

describe('List with elements', () => {
  const reflle: string[] = [
    'mega-sena',
    'quina',
    'dia de sorte',
    'lotofacil',
    'lotomania',
    'timemania',
  ];
  it('render with one or more elements', () => {
    render(<Ball />);

    const mockFn = jest.fn().mockReturnValue(reflle);
    const items = screen.queryAllByRole('listitem');
    expect(items).toHaveLength(mockFn.length);
  });
});
