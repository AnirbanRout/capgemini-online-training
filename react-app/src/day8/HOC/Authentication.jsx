const Authentication = (WrappedComponent) => {
  return function AuthenticatedComponent() {
    const isAuthenticated = false;

    if (isAuthenticated) {
      return <WrappedComponent />;
    } else {
      return <h2>Please log in to access this page.</h2>;
    }
  };
};

export default Authentication;
