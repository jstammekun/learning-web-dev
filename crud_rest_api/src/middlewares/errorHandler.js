// Centralized error handling middleware

const errorHandler = (err, req, res, next) => {
    console.log(err.stack);
    res.status(500).json({ 
        status: 500,
        message: "Some message",
        error: err.message });
};

export default errorHandler;