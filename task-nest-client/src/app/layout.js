import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import Nav from "@/components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TaskNest",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <html lang="en">
        <body className={inter.className}>
          <ProtectedRoute>
            <div className="min-h-screen p-6 bg-dark-100 text-gray-100">
              <Nav />
              {children}
            </div>
          </ProtectedRoute>
        </body>
      </html>
    </AuthProvider>
  );
}
