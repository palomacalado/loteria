import { render, screen } from '@testing-library/react';
import Selector from './selector';

describe('Selector component', () => {
  const reflle: string[] = [
    'mega-sena',
    'quina',
    'dia de sorte',
    'lotofacil',
    'lotomania',
    'timemania',
  ];

  test('Drawn Selector', () => {
    const { container } = render(<Selector />);
    expect(container).toBeInTheDocument();
  });

  test('Options of reflle', () => {
    render(<Selector />);

    const mockFn = jest.fn().mockReturnValue(reflle);
    const typeOfReflle = screen.queryAllByRole('option');
    expect(typeOfReflle).toHaveLength(mockFn.length);
  });
});
