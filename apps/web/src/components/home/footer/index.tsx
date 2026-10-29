export default function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-bg-base py-10 md:py-14">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-[13px]">
        <div>
          <h4 className="font-sans font-medium text-text-primary mb-3">Browse</h4>
          <ul className="space-y-2 font-mono text-text-tertiary">
            <li><a href="#" className="hover:text-text-secondary transition-colors">Trending</a></li>
            <li><a href="#" className="hover:text-text-secondary transition-colors">New releases</a></li>
            <li><a href="#" className="hover:text-text-secondary transition-colors">Top rated</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-sans font-medium text-text-primary mb-3">Account</h4>
          <ul className="space-y-2 font-mono text-text-tertiary">
            <li><a href="#" className="hover:text-text-secondary transition-colors">Sign up</a></li>
            <li><a href="#" className="hover:text-text-secondary transition-colors">Sign in</a></li>
            <li><a href="#" className="hover:text-text-secondary transition-colors">My list</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-sans font-medium text-text-primary mb-3">Company</h4>
          <ul className="space-y-2 font-mono text-text-tertiary">
            <li><a href="#" className="hover:text-text-secondary transition-colors">About</a></li>
            <li><a href="#" className="hover:text-text-secondary transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-text-secondary transition-colors">Press</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-sans font-medium text-text-primary mb-3">Legal</h4>
          <ul className="space-y-2 font-mono text-text-tertiary">
            <li><a href="#" className="hover:text-text-secondary transition-colors">Terms</a></li>
            <li><a href="#" className="hover:text-text-secondary transition-colors">Privacy</a></li>
            <li><a href="#" className="hover:text-text-secondary transition-colors">DMCA</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
