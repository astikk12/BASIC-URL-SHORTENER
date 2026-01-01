import CreateUrl from "./components/CreateUrl";
import UrlList from "./components/UrlList";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto space-y-8">
        
        <CreateUrl />

        <UrlList />
      </div>
    </div>
  );
}

export default App;
