import Counter from "@/components/Counter";
import Navigation from "@/components/Navigation";

const CounterPage = () => {
  return (
    <div className="min-h-screen bg-background p-8">
      <Navigation />
      <main className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Counter App</h1>
        <Counter />
      </main>
    </div>
  );
};

export default CounterPage;