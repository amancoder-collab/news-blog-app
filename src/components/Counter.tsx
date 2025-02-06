import { useState } from "react";
import { Plus, Minus, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

const Counter = () => {
  const [count, setCount] = useState(0);

  console.log("Counter value:", count);

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="text-8xl font-bold text-primary transition-all duration-300 transform">
        {count}
      </div>
      
      <div className="flex gap-4">
        <Button
          variant="outline"
          size="lg"
          onClick={() => setCount(prev => prev - 1)}
          className="hover:scale-105 transition-transform"
        >
          <Minus className="w-6 h-6" />
        </Button>
        
        <Button
          variant="outline"
          size="lg"
          onClick={() => setCount(0)}
          className="hover:scale-105 transition-transform"
        >
          <RotateCcw className="w-6 h-6" />
        </Button>
        
        <Button
          variant="outline"
          size="lg"
          onClick={() => setCount(prev => prev + 1)}
          className="hover:scale-105 transition-transform"
        >
          <Plus className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
};

export default Counter;