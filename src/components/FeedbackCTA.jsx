export default function ResumeCTA() {
  const handleClick = () => {
    window.open(
      'https://drive.google.com/file/d/1M4mOMEeesHX3fSabhg3MuEzxuDd2ZUdb/view?usp=sharing',
      '_blank'
    )
  }

  return (
    <div
      onClick={handleClick}
      style={{
        position: 'fixed',
        bottom: '0px',
        right: '20px',
        width: '8%',
        backgroundColor: 'rgba(20, 20, 30, 0.95)',
        color: '#cceeff',
        padding: '0.75rem 1.5rem',
        borderRadius: '100px',
        fontWeight: '600',
        fontSize: '1rem',
        cursor: 'pointer',
        zIndex: 6,
        transition: 'all 0.3s ease',
        backdropFilter: 'blur(6px)',
        textShadow: '0 0 10px rgba(0, 170, 255, 0.6)',
        textAlign: 'center',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.textShadow = '0 0 12px rgba(0, 170, 255, 0.8)'
        e.currentTarget.style.transform = 'scale(1.05)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.textShadow = '0 0 10px rgba(0, 170, 255, 0.6)'
        e.currentTarget.style.transform = 'scale(1)'
      }}
    >
      Resume
    </div>
  )
}
