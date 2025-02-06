import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background p-8">
      <Navigation />
      <main className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">Welcome to Counter App</h1>
        <p className="text-lg text-muted-foreground mb-8">
          A simple and beautiful counter application built with React and TypeScript
        </p>
        <Button 
          size="lg"
          onClick={() => navigate("/counter")}
          className="hover:scale-105 transition-transform"
        >
          Try Counter
        </Button>
      </main>
    </div>
  );
};

export default Index;