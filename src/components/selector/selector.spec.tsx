import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Selector from './selector';

describe('PrizeDraw component', () => {
  const reflle: string[] = [
    'mega-sena',
    'quina',
    'dia de sorte',
    'lotofacil',
    'lotomania',
    'timemania',
  ];
  it('Drawn PrizeDraw', () => {
    const { container } = render(<Selector />);
    expect(container).toBeInTheDocument();
  });

  it('Options of reflle', () => {
    render(<Selector />);

    const mockFn = jest.fn().mockReturnValue(reflle);
    const typeOfReflle = screen.queryAllByRole('option');
    expect(typeOfReflle).toHaveLength(mockFn.length);
  });
});
describe('Dropdown', () => {
  it('Quina', async () => {
    render(<Selector />);

    const select = await screen.queryAllByRole('option');
    expect(select).toHaveTextContent('QUINA');
  });
});
