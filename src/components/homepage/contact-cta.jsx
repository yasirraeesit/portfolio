import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

const ContactCTA = () => {
  return (
    <section className="nb-section nb-section-shell">
      <div className="nb-container">
        <Card className="p-8 md:p-12 text-center overflow-hidden relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(52,211,153,0.16),transparent_45%)]" />
          <div className="relative z-10">
          <div className="flex justify-center gap-2 mb-5">
            {["Fast delivery", "Clear scope", "Strong UI"].map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full border-2 border-[var(--nb-border)] bg-[var(--nb-bg)] text-[10px] font-black uppercase tracking-[0.18em] shadow-[4px_4px_0_0_var(--nb-shadow)]">
                {tag}
              </span>
            ))}
          </div>
          <h2 className="nb-h2">Have an idea?</h2>
          <p className="nb-body mt-4 max-w-2xl mx-auto">
            If you want a clean, fast, maintainable product—let’s talk.
          </p>
          <div className="mt-8 flex justify-center">
            <Button as={Link} to="/contact" size="lg">
              Contact <HiArrowRight size={16} />
            </Button>
          </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ContactCTA;
