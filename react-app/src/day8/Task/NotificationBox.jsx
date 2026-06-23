const NotificationBox = ({ notification_data }) => {
  return (
    <div>
      <h3>Notification</h3>
      <p>{notification_data.title}</p>
    </div>
  );
};

export default NotificationBox;
