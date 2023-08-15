import { createContext, useContext, useState } from 'react';
import { ScheduledNotification } from '../models';
import { NotificationTarget } from '../enums';

interface ContextType {
  get: (
    targetId: string,
    target: NotificationTarget,
  ) => Promise<ScheduledNotification | null>;
  schedule: (
    targetId: string,
    target: NotificationTarget,
  ) => Promise<ScheduledNotification>;
  cancel: (notification: ScheduledNotification) => Promise<void>;
}

const NotificationContext = createContext<ContextType>({
  get: async () => null,
  schedule: (async () => {}) as any,
  cancel: async () => {},
});

const Provider = NotificationContext.Provider;

export const useNotifications = () =>
  useContext<ContextType>(NotificationContext);

interface Props {
  children: React.ReactNode;
}

export const NotificationProvider = ({ children }: Props) => {
  const [notifications, setNotifications] = useState<ScheduledNotification[]>(
    [],
  );

  async function get(
    targetId: string,
    target: NotificationTarget,
  ): Promise<ScheduledNotification | null> {
    return (
      notifications.find(
        (n) => n.targetId === targetId && n.target === target,
      ) || null
    );
  }

  async function schedule(
    targetId: string,
    target: NotificationTarget,
  ): Promise<ScheduledNotification> {
    const notification: ScheduledNotification = {
      id: targetId,
      targetId,
      target,
    };
    setNotifications((notifications) => [...notifications, notification]);
    return notification;
  }

  async function cancel(notification: ScheduledNotification): Promise<void> {
    setNotifications((notifications) =>
      notifications.filter((n) => n.id !== notification.id),
    );
  }

  return <Provider value={{ get, schedule, cancel }}>{children}</Provider>;
};
