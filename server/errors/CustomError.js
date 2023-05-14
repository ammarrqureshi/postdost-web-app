class CustomError extends Error {
  constructor(message, statusCode, name) {
    super(message);
    this.statusCode = statusCode || 500;
    this.name = name || 'Custom Error';
    this.data = new Date();
  }
  toJSON() {
    return {
      error: {
        name: this.name,
        message: this.message,
        statusCode: this.statusCode,
        date: this.date,
      },
    };
  }
}

export default CustomError;
