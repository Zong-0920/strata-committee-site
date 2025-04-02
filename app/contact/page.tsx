export default function Page() {
  return (
    <div className="max-w-xl">
      <h1 className="text-2xl font-bold mb-4">Contact the Committee</h1>
      <form action="https://formsubmit.co/YOUR_EMAIL_HERE" method="POST" className="space-y-4">
        <input type="hidden" name="_captcha" value="false" />
        <input type="text" name="name" placeholder="Your Name" required className="w-full p-2 border rounded" />
        <input type="email" name="email" placeholder="Your Email" required className="w-full p-2 border rounded" />
        <textarea name="message" placeholder="Your Message" required className="w-full p-2 border rounded h-32"></textarea>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Send</button>
      </form>
    </div>
  );
}
