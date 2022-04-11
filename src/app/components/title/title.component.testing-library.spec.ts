import {render, screen, fireEvent} from '@testing-library/angular';
import {TitleComponent} from "./title.component";


describe('Title Componenet', ()=> {
  test('should render the supplied title', async() => {
    await render(TitleComponent, {
      componentProperties: {
        title: 'foo'
      }
    });

    expect(screen.getByText('foo')).toBeInTheDocument();

  });
});
