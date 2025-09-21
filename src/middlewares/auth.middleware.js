export const protect = (req, res, next) => {
    if (!req.auth || !req.auth.userId) {
        return res.status(401).json({
            error: "Authentication required",
            message: "No valid authentication token provided",
            details: "Please provide valid Clerk authentication headers",
        });
    }
    next();
};
