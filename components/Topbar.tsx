export default function TopBar() {
  return (
    <div className="bg-navy text-sm text-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-5 py-2">
        <span>Jose Abad Santos Avenue, Clark Freeport Zone, Pampanga</span>
        <div className="flex gap-5">
          <a href="https://www.nu.edu.ph/" className="hover:underline">
            Back to main site
          </a>
          <a href="/contact" className="hover:underline">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
