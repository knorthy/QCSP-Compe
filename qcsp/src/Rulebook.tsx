import './Rulebook.css'
import { MdMenuBook, MdEmojiEvents } from 'react-icons/md'

export default function Rulebook() {
  const cards = [
    {
      id: 1,
      icon: <MdMenuBook className="rulebook-card-icon" />,
      title: 'General Guidelines',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
    {
      id: 2,
      icon: <MdEmojiEvents className="rulebook-card-icon" />,
      title: 'How to win',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    }
  ]

  return (
    <section className="rulebook-section">
      <div className="rulebook-container">
        {/* Header */}
        <div className="rulebook-header">
          <h2 className="rulebook-title">Rulebook</h2>
          <p className="rulebook-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="rulebook-cards-grid">
          {cards.map((card) => (
            <div key={card.id} className="rulebook-card">
              <div className="rulebook-card-header">
                {card.icon}
                <h3 className="rulebook-card-title">{card.title}</h3>
              </div>
              <p className="rulebook-card-description">{card.description}</p>
              <div className="rulebook-card-arrow">→</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
