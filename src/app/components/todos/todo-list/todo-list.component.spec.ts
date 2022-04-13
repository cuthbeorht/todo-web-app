import {render, screen, fireEvent} from '@testing-library/angular';
import {TodoListComponent} from "./todo-list.component";
import {HttpClient} from "@angular/common/http";
import {of} from "rxjs";

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

    await render(TodoListComponent, {
      providers: [
        {
          provide: HttpClient,
          useValue: httpClientMock
        }
      ]
    });

    expect(screen.getByText('title')).toBeVisible();

  });
});
