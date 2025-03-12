
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "../components/Layout";
import AnimatedSection from "../components/AnimatedSection";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center p-6">
        <AnimatedSection animation="fade-up" className="text-center max-w-md">
          <div className="font-bold text-8xl mb-6 text-blue-500">404</div>
          <h1 className="text-2xl font-bold mb-4">Page Not Found</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <a 
            href="/" 
            className="glass-button px-6 py-3 font-medium inline-flex items-center justify-center"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Return to Home
          </a>
        </AnimatedSection>
      </div>
    </Layout>
  );
};

export default NotFound;
