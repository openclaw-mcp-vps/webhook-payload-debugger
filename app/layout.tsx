import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Webhook Payload Debugger — Debug webhook payloads in real-time',
  description: 'Capture, format, and analyze webhook payloads with diff detection and payload validation tools. Built for API developers and integration engineers.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="c7e901bb-1467-427e-9998-e4eba13fcef2"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  )
}
