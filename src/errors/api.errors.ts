export class ApiError extends Error {
  constructor(public message: string, public statusCode: number = 500) {
    super(message);
  }
}

export class NotFoundError extends ApiError {
  constructor(public message: string, public statusCode: number = 404) {
    super(message);
  }
}
