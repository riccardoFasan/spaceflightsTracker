import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { ScheduledNotification } from '../models';
import {
  cancelNotification,
  getNotifications,
  scheduleNotification,
  setUpNotifications,
  showNotificationMessage,
} from '../services';

interface ContextType {
  notifications: ScheduledNotification[];
  get: (targetId: string) => ScheduledNotification | null;
  schedule: (
    targetId: string,
    targetName: string,
    eventDate: Date,
  ) => Promise<ScheduledNotification>;
  cancel: (notification: ScheduledNotification) => Promise<void>;
}

const NotificationContext = createContext<ContextType>({
  notifications: [],
  get: () => null,
  schedule: (async () => {}) as any,
  cancel: async () => {},
});

export const useNotifications = () =>
  useContext<ContextType>(NotificationContext);

const { Provider } = NotificationContext;

interface Props {
  children: ReactNode;
}

export const NotificationProvider = ({ children }: Props) => {
  const [notifications, setNotifications] = useState<ScheduledNotification[]>(
    [],
  );

  useEffect(() => {
    loadNotifications();
  }, []);

  async function loadNotifications(): Promise<void> {
    await setUpNotifications();
    setNotifications(await getNotifications());
  }

  function get(targetId: string): ScheduledNotification | null {
    return notifications.find((n) => n.targetId === targetId) || null;
  }

  async function schedule(
    targetId: string,
    targetName: string,
    eventDate: Date,
  ): Promise<ScheduledNotification> {
    const MS_PER_MINUTE: number = 60000;
    const fireDate = new Date(eventDate.getTime() - 30 * MS_PER_MINUTE);

    const notification: ScheduledNotification = await scheduleNotification(
      targetId,
      targetName,
      fireDate,
    );

    setNotifications((notifications) => [...notifications, notification]);

    showNotificationMessage(fireDate);

    return notification;
  }

  async function cancel(notification: ScheduledNotification): Promise<void> {
    await cancelNotification(notification);
    setNotifications((notifications) =>
      notifications.filter((n) => n.id !== notification.id),
    );
  }

  return (
    <Provider value={{ notifications, get, schedule, cancel }}>
      {children}
    </Provider>
  );
};
