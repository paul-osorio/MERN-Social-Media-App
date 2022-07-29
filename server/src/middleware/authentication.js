module.exports = (req, res, next) => {
  /**
   * USER AUTHENTICATION USING PASSPORT LOCAL STRATEGY
   */
  if (req.isAuthenticated()) {
    /**
     * If user is authenticated, return user data from session
     */
    return next();
  } else {
    /**
     * If user is not authenticated, return error
     * */
    return res.status(401).json({
      message: "Unauthorized",
    });
  }
};
