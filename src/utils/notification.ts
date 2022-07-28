import notification, { NotificationPlacement } from 'antd/lib/notification';

export const openNotification = (
  placement: NotificationPlacement,
  message: string,
  description: string,
  isWarn?: boolean
) => {
  if (isWarn) {
    notification.warn({
      message,
      description,
      placement,
    });
  } else {
    notification.info({
      message,
      description,
      placement,
    });
  }
};
