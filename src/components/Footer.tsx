export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-text/12 py-8">
      <div className="max-w-6xl mx-auto px-5 text-center">
        <p className="text-muted text-sm">
          © {currentYear} THE SEGMENTS. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
