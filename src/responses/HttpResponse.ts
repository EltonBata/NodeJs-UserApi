import exp from "constants";
import { HttpStatusCode } from "../helpers/HttpStatusCode";

export interface HttpResponse<T> {
  statusCode: HttpStatusCode;
  body: T;
}

export const done = <T>(data: T): HttpResponse<T> => ({
  statusCode: HttpStatusCode.OK,
  body: data,
});

export const created = <T>(data: T): HttpResponse<T> => ({
  statusCode: HttpStatusCode.CREATED,
  body: data,
});

export const badRequest = (message: string): HttpResponse<string> => ({
  statusCode: HttpStatusCode.BAD_REQUEST,
  body: message,
});

export const serverError = (): HttpResponse<string> => ({
  statusCode: HttpStatusCode.SERVER_ERROR,
  body: "Something went wrong",
});

;
