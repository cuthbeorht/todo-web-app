import {TodoApi} from "./TodoApi";

const httpClientMock: any = {
  get: jest.fn()
}

describe('TodoApi', () => {
  it('given an empty response should contain an empty list of todos', async ()=> {
    httpClientMock.get.mockReturnValueOnce({todos: []});

    const service = new TodoApi(httpClientMock);

    const result = service.fetchTodoItems();

    expect(result).toEqual({todos: []});

  });

  it('given a response with items should a list of todos', async ()=> {
    const todoTestItem = {id: 1, title: 'foo', description: 'bar', created_by: 'david', created: '2022-01-01T00:00:00.000Z'};
    httpClientMock.get.mockReturnValueOnce({todos: [todoTestItem]});

    const service = new TodoApi(httpClientMock);

    const result = service.fetchTodoItems();

    expect(result).toEqual({todos: [todoTestItem]});

  });

  it('given api returns a 400 should throw an error', async () => {
    httpClientMock.get.mockImplementation(() => new Error());

    const service = new TodoApi(httpClientMock);

    expect(service.fetchTodoItems()).toEqual(new  Error());
  })

});
