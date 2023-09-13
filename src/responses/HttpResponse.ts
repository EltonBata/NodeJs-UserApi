import exp from "constants";

export interface HttpResponse<T> {
  statusCode: number;
  body: T;
}

export const done = <T>(data: T): HttpResponse<T> => ({
  statusCode: 200,
  body: data,
});

export const created = <T>(data: T): HttpResponse<T> => ({
  statusCode: 201,
  body: data,
});

export const badRequest = (message: string): HttpResponse<string> => ({
  statusCode: 400,
  body: message,
});

export const serverError = (): HttpResponse<string> => ({
  statusCode: 500,
  body: "Something went wrong",
});

;
