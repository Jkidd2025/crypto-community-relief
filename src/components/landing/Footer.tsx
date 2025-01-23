import { Mail, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary/50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <div className="space-y-2">
              <a href="mailto:contact@cubancryptofoundation.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-4 w-4" />
                contact@cubancryptofoundation.com
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="h-4 w-4" />
                (123) 456-7890
              </a>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Mark Cuban Crypto Foundation. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              This is a proposal for discussion purposes only.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};