import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-secondary/50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <div className="mb-6">
            <p className="text-sm text-muted-foreground mb-2">Presented by Joshua Kidd</p>
            <div className="flex justify-center gap-4">
              <a href="https://twitter.com/Jkidd2025" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">X</a>
              <a href="https://www.linkedin.com/in/kiddjoshua" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">LinkedIn</a>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Mark Cuban Crypto Foundation. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-4 max-w-2xl mx-auto">
            This proposal is for discussion purposes only and does not constitute financial or legal advice. All participants should conduct thorough due diligence and consult professional advisors before making any financial decisions related to this project.
          </p>
        </div>
      </div>
    </footer>
  );
};