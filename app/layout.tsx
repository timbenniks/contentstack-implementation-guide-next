import type { Metadata } from "next"; // Importing the Metadata type from Next.js
import "./globals.css"; // Importing global CSS styles

// Defining metadata for the application
export const metadata: Metadata = {
  title: "Contentstack Next Implementation", // Title of the application
  description: "Created by Contentstack DevRel", // Description of the application
};

// RootLayout component that wraps the entire application
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode; // Type definition for children prop
}>) {
  return (
    <html lang='en'>{/* Setting the language attribute for the HTML document */}
      <body>{children}</body>{/* Rendering the children components inside the body */}
    </html>
  );
}