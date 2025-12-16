import './Layout.css';

export default function Layout({ children }) {
  return (
    <div className="layout">
      {/* Main Content */}
      <main className="main-content">
        {children}
      </main>
    </div>
  );
}