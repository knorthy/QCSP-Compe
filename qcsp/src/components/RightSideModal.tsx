import './RightSideModal.css';
import { useEffect } from 'react';
import type { EventData } from '../types/EventData';

interface RightSideModalProps {
  isOpen: boolean;
  onClose: () => void;
  event: EventData | null;
}

export default function RightSideModal({
  isOpen,
  onClose,
  event,
}: RightSideModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen || !event) return null;

  const handleOverlayClick = () => {
    onClose();
  };

  const handlePanelClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-panel" onClick={handlePanelClick}>
        {/* Sticky Header */}
        <div className="modal-panel-header">
          <h2 style={{ margin: 0, fontSize: '20px' }}>Event Competition</h2>
          <button
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close modal"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Event Image */}
        <img src={event.imageUrl} alt={event.title} className="modal-panel-image" />

        {/* Event Title */}
        <h3 className="modal-panel-title">{event.title}</h3>

        {/* Event Details */}
        <div className="modal-panel-content">
          {/* Date & Time */}
          <div className="modal-info-item">
            <div className="modal-info-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
            </div>
            <div className="modal-info-text">
              <strong>{event.date}</strong>
              <p>{event.time}</p>
            </div>
          </div>

          {/* Location */}
          <div className="modal-info-item">
            <div className="modal-info-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <div className="modal-info-text">
              <strong>Location</strong>
              <p>{event.location}</p>
            </div>
          </div>

          {/* Host */}
          <div className="modal-info-item">
            <div className="modal-info-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <div className="modal-info-text">
              <strong>Hosted by</strong>
              <p>{event.host}</p>
            </div>
          </div>

          {/* Description */}
          <div className="modal-section">
            <h4 className="modal-section-title">About Event</h4>
            <p className="modal-section-description">{event.description}</p>
          </div>

          {/* CTA Button */}
          <button className="modal-button">Register Now</button>
        </div>
      </div>
    </div>
  );
}
