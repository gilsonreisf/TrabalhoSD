class AppError extends Error {
    public readonly message: string;
  
    public readonly statusCode: number;
  
    constructor(message: string, statusCode = 400) {
      super(message);
      Object.setPrototypeOf(this, AppError.prototype);
  
      this.message = message;
      this.statusCode = statusCode;
    }
  }
  
  export default AppError;
  