import Cards from "@/app/ui/invoices/cards";


export default function InvoicesPage() {
  return (
    <div className="flex min-h-screen h-screen flex-col items-center justify-start py-12 px-3 md:p-12">
      <h3 className="text-3xl mb-12">Invoices Page</h3>
      <Cards />
    </div>
  );
}
