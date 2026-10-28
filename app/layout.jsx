import './globals.css';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  title: 'Priya Saini | Forensic Science Nexus & Digital Lab',
  description: 'Fullstack React Forensic Science Portfolio featuring case files, 3D evidence reconstruction, lab timeline, and digital investigations by Priya Saini.',
  keywords: ['Forensic Science', 'Digital Forensics', 'DNA Profiling', 'Ballistics', 'Crime Scene Investigation', 'Priya Saini'],
  authors: [{ name: 'Priya Saini' }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="ambient-glow-1" />
        <div className="ambient-glow-2" />
        {children}
      </body>
    </html>
  );
}
