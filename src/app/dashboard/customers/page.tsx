import Gallery from "@/app/ui/customers/gallery";

export default function CustomersPage() {
  return (
    <div className="flex min-h-screen h-screen flex-col items-center justify-start py-12 px-3 md:p-12">
      <h3 className="text-3xl mb-12">Customers Page</h3>
      <Gallery />
    </div>
  );
}
