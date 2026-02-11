"use client";

import * as React from "react";

export type NotificationSettings = {
  transactionConfirmation: boolean;
  transactionEdited: boolean;
  transactionInvoice: boolean;
  transactionCancelled: boolean;
  transactionRefund: boolean;
  paymentError: boolean;
};

const DEFAULT_NOTIFICATIONS: NotificationSettings = {
  transactionConfirmation: true,
  transactionEdited: false,
  transactionInvoice: true,
  transactionCancelled: true,
  transactionRefund: true,
  paymentError: false,
};

const STORAGE_KEY = "estatery-settings";

function loadNotifications(): NotificationSettings {
  if (typeof window === "undefined") return DEFAULT_NOTIFICATIONS;
  try {
    const raw = window.localStorage.getItem(`${STORAGE_KEY}-notifications`);
    if (!raw) return DEFAULT_NOTIFICATIONS;
    const parsed = JSON.parse(raw) as Partial<NotificationSettings>;
    return { ...DEFAULT_NOTIFICATIONS, ...parsed };
  } catch {
    return DEFAULT_NOTIFICATIONS;
  }
}

function saveNotifications(n: NotificationSettings) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(`${STORAGE_KEY}-notifications`, JSON.stringify(n));
  } catch {
    // ignore
  }
}

type SettingsContextValue = {
  notifications: NotificationSettings;
  setNotifications: React.Dispatch<React.SetStateAction<NotificationSettings>>;
  saveNotifications: () => void;
  revertNotifications: () => void;
};

const SettingsContext = React.createContext<SettingsContextValue | null>(null);

export function SettingsProvider({ children }: { children: React.ReactNode }) {
  const [notifications, setNotifications] = React.useState<NotificationSettings>(loadNotifications);
  const savedRef = React.useRef<NotificationSettings>(loadNotifications());

  const saveNotificationsToStorage = React.useCallback(() => {
    setNotifications((prev) => {
      saveNotifications(prev);
      savedRef.current = prev;
      return prev;
    });
  }, []);

  const revertNotifications = React.useCallback(() => {
    const saved = loadNotifications();
    savedRef.current = saved;
    setNotifications(saved);
  }, []);

  const value = React.useMemo(
    () => ({
      notifications,
      setNotifications,
      saveNotifications: saveNotificationsToStorage,
      revertNotifications,
    }),
    [notifications, saveNotificationsToStorage, revertNotifications]
  );

  return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>;
}

export function useSettings(): SettingsContextValue {
  const ctx = React.useContext(SettingsContext);
  if (!ctx) {
    throw new Error("useSettings must be used within a SettingsProvider");
  }
  return ctx;
}
