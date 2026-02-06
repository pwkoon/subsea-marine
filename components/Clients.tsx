const clients = [1, 2, 3, 4];
const duplicatedClients = [...clients, ...clients, ...clients];

export default function Clients() {
  return (
    <section className="relative overflow-hidden">
      <div className="bg-[url('/images/homepage3.jpg')] bg-cover bg-center min-h-[clamp(32rem,96vh,72rem)] flex flex-col items-center justify-center gap-[clamp(1.5rem,5vw,3rem)]">
        <div>
          <p className="text-[clamp(2rem,4vw,5rem)] text-yellow font-extrabold">OUR CLIENTS</p>
        </div>
        <div className="infinite-scroll-container">
          <div className="infinite-scroll-track">
            {duplicatedClients.map((item, idx) => (
              <div key={idx} className="scroll-item">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
