
export default function ErrorPage() {
 
    throw new Error("This is an intentional error for demonstration purposes.");
 
  return (
    <div className="min-h-screen flex items-center justify-center bg-red-50">
      <h1 className="text-2xl font-bold text-red-600">
        Something went wrong!
      </h1>
    </div>
  );
}
