import { useState, useCallback } from 'react';
import type { EventData } from './EventData';

export function useModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [event, setEvent] = useState<EventData | null>(null);

  const openModal = useCallback((eventData: EventData) => {
    setEvent(eventData);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    // Clear event after modal is closed
    setTimeout(() => {
      setEvent(null);
    }, 300);
  }, []);

  const toggleModal = useCallback((eventData: EventData) => {
    if (isOpen) {
      closeModal();
    } else {
      openModal(eventData);
    }
  }, [isOpen, openModal, closeModal]);

  return {
    isOpen,
    event,
    openModal,
    closeModal,
    toggleModal,
  };
}
