


const ErrorNotification = ({ message } : { message: string }) => {
  if (!message) return null; 

  return (
    <div style={{ color: 'white', background: 'red', padding: '10px', borderRadius: '5px' }}>
     {message}
    </div>
  );
};



export default ErrorNotification;