export default function SuccessPage() {
  return (

<div className="min-h-screen flex items-center justify-center bg-gray-100">

<div className="bg-white p-8 rounded-xl shadow-lg w-[400px] text-black text-center">

<h1 className="text-3xl font-bold mb-4">
🎉 Order Successful
</h1>

<p className="mb-6">
Your order has been placed successfully.
</p>

<a href="/checkout/cart">

<button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">

Back to Cart

</button>

</a>

</div>

</div>

  );
}