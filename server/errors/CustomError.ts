class CustomError extends Error {
  statusCode: number;
  date: Date;
  constructor(message: string ,statusCode: number, name?: string) {
    super(message);
    this.statusCode = statusCode || 500;
    this.name = name || "CustomError";
    this.date = new Date();
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
