export const handleResError = (res, err, statusCode) => {
  return res.status(statusCode).json({
    message: err.message,
  });
};

export const handleResSuccess = (res, message, data, statusCode) => {
  return res.status(statusCode).json({
    message,
    data,
  });
};
