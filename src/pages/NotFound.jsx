import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-extralight text-primary">404</h1>
        <h2 className="mt-4 text-xl font-light text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground font-light">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:shadow-glow transition-all"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}
