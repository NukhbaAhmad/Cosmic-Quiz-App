import type { ToasterProps } from 'react-hot-toast'

export const toastConfig: ToasterProps = {
  position: 'top-right',
  gutter: 12,
  reverseOrder: false,
  toastOptions: {
    duration: 3000,
    style: {
      background: '#1e1b4b',
      color: '#fff',
      border: '1px solid rgba(255,255,255,0.1)',
      borderRadius: '8px',
      padding: '16px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
    },
    success: {
      duration: 3000,
      style: {
        background: '#065f46',
        border: '1px solid rgba(74, 222, 128, 0.3)',
      },
    },
    error: {
      duration: 2000,
      style: {
        background: '#7f1d1d',
        border: '1px solid rgba(248, 113, 113, 0.3)',
      },
    }
  },
}
