export const Footer = () => {
  return (
    <footer className="bg-secondary/50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Mark Cuban Crypto Foundation. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-4 max-w-3xl mx-auto leading-relaxed">
            This proposal is for discussion purposes only and does not constitute financial or legal advice. All participants should conduct thorough due diligence and consult professional advisors before making any financial decisions related to this project.
          </p>
        </div>
      </div>
    </footer>
  );
};