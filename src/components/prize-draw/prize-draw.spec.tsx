import { render } from '@testing-library/react';
import PrizeDraw from './prize-draw';

describe('PrizeDraw component', () => {
  it('Drawn PrizeDraw', () => {
    const { container } = render(<PrizeDraw />);
    expect(container).toBeInTheDocument();
  });

  it('Group of balls', () => {
    const { container } = render(<PrizeDraw />);
    expect(
      container.querySelector('#root > div > div:nth-child(2) > div > div'),
    );
  });
});
