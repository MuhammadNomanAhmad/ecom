export const handleApiError = (error) => {
    if (process.env.NODE_ENV === 'development') {
      console.error('API Error:', error);
    }
    // Send error to monitoring service (e.g., Sentry)
    return error.message;
  };
  
  // Create a generic error component
  export const ErrorFallback = ({ message }) => (
    <div className="p-4 bg-red-100 text-red-700">
      Error: {message}. Please reload the page.
    </div>
  );