import {render, screen, fireEvent, waitFor, findAllByText } from '@testing-library/angular';
import {configure} from '@testing-library/dom';
import {TodoListComponent} from "./todo-list.component";
import {HttpClient} from "@angular/common/http";
import {of} from "rxjs";
import {byRole, byText} from 'testing-library-selector';

configure({
  defaultHidden: true
})

const ui = {
  title: byRole('list', {hidden: true})
}

describe('TodoList Component',  () => {

  const httpClientMock = {
    get: jest.fn()
  }

  it('should render the component', async() => {

    httpClientMock.get.mockReturnValueOnce(of({
      items: [
        {title: 'title'}
      ]
    }));

    const {container} = await render(TodoListComponent, {
      providers: [
        {
          provide: HttpClient,
          useValue: httpClientMock
        }
      ]
    });
    expect(ui.title.get()).toBeInTheDocument();

  });
});
