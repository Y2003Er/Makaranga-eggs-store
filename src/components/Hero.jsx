export default function Hero() {
  return (
    <section id="home" className="bg-[url('/images/egg-hero.jpg')] bg-cover bg-center h-screen flex items-center text-white px-10">
      <div className="max-w-2xl">
        <h1 className="text-5xl font-bold mb-4">Farm-Fresh Eggs Daily</h1>
        <p className="text-xl mb-6">100% Natural, No Antibiotics</p>
        <a 
          href="https://wa.me/94XXXXXXXXXX?text=I%20want%20to%20order%20eggs" 
          className="bg-primary hover:bg-green-600 px-6 py-3 rounded-lg font-bold"
        >
          Order via WhatsApp
        </a>
      </div>
    </section>
  );
}