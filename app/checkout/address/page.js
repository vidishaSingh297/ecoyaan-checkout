export default function AddressPage() {
  return (

<div className="min-h-screen flex items-center justify-center bg-gray-100">

<div className="bg-white p-8 rounded-xl shadow-lg w-[400px] text-black">

<h1 className="text-2xl font-bold mb-6 text-center">
Shipping Address
</h1>

<input
type="text"
placeholder="Full Name"
className="border p-2 w-full mb-3"
/>

<input
type="email"
placeholder="Email"
className="border p-2 w-full mb-3"
/>

<input
type="tel"
placeholder="Phone Number"
className="border p-2 w-full mb-3"
/>

<input
type="text"
placeholder="PIN Code"
className="border p-2 w-full mb-3"
/>

<input
type="text"
placeholder="City"
className="border p-2 w-full mb-3"
/>

<input
type="text"
placeholder="State"
className="border p-2 w-full mb-3"
/>

<a href="/checkout/payment">

<button className="w-full mt-4 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">

Continue to Payment

</button>

</a>

</div>

</div>

  );
}