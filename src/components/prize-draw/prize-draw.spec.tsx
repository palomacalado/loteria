import { render, screen } from '@testing-library/react';
import PrizeDraw from './prize-draw';

describe('PrizeDraw component', () => {
  test('Drawn PrizeDraw', () => {
    const { container } = render(<PrizeDraw />);
    expect(container).toBeInTheDocument();
  });

  test('Group of balls', async () => {
    render(<PrizeDraw />);

    const view = await screen.getByRole('list');
    expect(view).toBeInTheDocument();
  });
});
