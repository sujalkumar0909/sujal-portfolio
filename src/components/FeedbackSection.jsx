import { useState } from 'react'

export default function FeedbackSection() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!name || !email || !phone || !message) {
      alert('Please fill out all fields.')
      return
    }

    try {
      await fetch('https://sujal009.app.n8n.cloud/webhook/9459d421-035f-48bd-856c-945618a3f30d', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, message }),
      })

      setSubmitted(true)
    } catch (err) {
      console.error('Submission failed:', err)
    }
  }

  return (
    <section
      id="feedback-section"
      style={{
        position: 'relative',
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '4rem 2rem',
        color: '#fff',
        zIndex: 1,
      }}
    >
      <h2
        style={{
          fontSize: '2.8rem',
          marginBottom: '1rem',
          letterSpacing: '1px',
          color: '#cceeff',
          textShadow: '0 0 20px rgba(0, 170, 255, 0.6)',
          backdropFilter: 'blur(6px)',
          WebkitBackdropFilter: 'blur(6px)',
        }}
      >
        Feedback
      </h2>
      <p
        style={{
          fontSize: '1.1rem',
          marginBottom: '2rem',
          color: '#aaddff',
          opacity: 0.85,
          textAlign: 'center',
          maxWidth: '600px',
          textShadow: '0 0 8px rgba(0, 170, 255, 0.3)',
          backdropFilter: 'blur(4px)',
          WebkitBackdropFilter: 'blur(4px)',
        }}
      >
        Got thoughts or suggestions? Drop them below.
      </p>

      {!submitted ? (
        <form
          onSubmit={handleSubmit}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            width: '100%',
            maxWidth: '500px',
          }}
        >
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={inputStyle}
            required
          />
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
            required
          />
          <input
            type="tel"
            placeholder="Your phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={inputStyle}
            required
          />
          <textarea
            placeholder="Your feedback"
            rows="5"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={inputStyle}
            required
          />
          <button type="submit" style={buttonStyle}>Send</button>
        </form>
      ) : (
        <p style={{ color: '#0af', fontWeight: '600', fontSize: '1.1rem' }}>
          Thanks for your feedback! You’ll receive a thank-you email shortly.
        </p>
      )}
    </section>
  )
}

const inputStyle = {
  padding: '1rem',
  borderRadius: '12px',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  color: '#cceeff',
  fontSize: '1rem',
  outline: 'none',
  backdropFilter: 'blur(10px)',
  WebkitBackdropFilter: 'blur(10px)',
  boxShadow: '0 0 12px rgba(0, 170, 255, 0.2)',
  textShadow: '0 0 4px rgba(0, 170, 255, 0.3)',
}

const buttonStyle = {
  padding: '1rem',
  borderRadius: '12px',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  backgroundColor: 'rgba(0, 170, 255, 0.15)',
  color: '#ffffff',
  fontWeight: 'bold',
  fontSize: '1rem',
  cursor: 'pointer',
  backdropFilter: 'blur(10px)',
  WebkitBackdropFilter: 'blur(10px)',
  boxShadow: '0 0 16px rgba(0, 170, 255, 0.4)',
  transition: 'all 0.3s ease',
}
