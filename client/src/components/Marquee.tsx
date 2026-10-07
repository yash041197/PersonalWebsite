const Marquee = () => {
  return (
    <div className="py-10 bg-primary text-white overflow-hidden">
      <div className="relative whitespace-nowrap">
        <div 
          className="inline-block whitespace-nowrap"
          style={{ 
            animation: 'marquee 30s linear infinite',
          }}
        >
          <span className="text-2xl md:text-4xl px-6">• AI Platforms • RAG Systems • Legacy Modernisation • Python &amp; FastAPI • Cloud Architecture • AI Platforms • RAG Systems • Legacy Modernisation • Python &amp; FastAPI • Cloud Architecture</span>
        </div>
        <div 
          className="inline-block whitespace-nowrap absolute top-0"
          style={{ 
            animation: 'marquee 30s linear infinite',
            animationDelay: '15s',
          }}
        >
          <span className="text-2xl md:text-4xl px-6">• AI Platforms • RAG Systems • Legacy Modernisation • Python &amp; FastAPI • Cloud Architecture • AI Platforms • RAG Systems • Legacy Modernisation • Python &amp; FastAPI • Cloud Architecture</span>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
