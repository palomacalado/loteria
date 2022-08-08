import { act, render, screen } from '@testing-library/react';
import App from './App';

const promise = Promise.resolve();

describe('App component', () => {
  it('Component', () => {
    const { container } = render(<App />);
    expect(container).toBeInTheDocument();
  });
  it('Text', async () => {
    render(<App />);

    const view = await screen.getByText(
      /este sorteio é meramente ilustrativo e não possui nenhuma ligação com a caixa\./i,
    );
    expect(view).toBeInTheDocument();
    await act(() => promise);
  });
  it('Balls', async () => {
    render(<App />);

    const view = await screen.getByRole('img');
    expect(view).toBeInTheDocument();
    await act(() => promise);
  });

  it('Prize Draw', async () => {
    render(<App />);

    const view = await screen.getByRole('list');
    expect(view).toBeInTheDocument();
  });
});
