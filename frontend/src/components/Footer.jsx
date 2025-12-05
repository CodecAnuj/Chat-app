import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="p-4 border-t footer footer-center bg-base-300 text-base-content/80 backdrop-blur-lg border-base-300">
      <aside>
        <p className="flex items-center justify-center gap-1 text-sm font-medium md:text-base">
          Made with
          <Heart className="mx-1 text-red-500 size-4 fill-red-500 animate-pulse" />
          by
          <a
            href="https://github.com/CodecAnuj"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all text-primary hover:underline"
          >
            Anuj Tiwari
          </a>
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
