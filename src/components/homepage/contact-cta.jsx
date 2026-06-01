import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

const ContactCTA = () => {
  return (
    <section className="nb-section">
      <div className="nb-container">
        <Card className="p-8 md:p-12 text-center">
          <h2 className="nb-h2">Have an idea?</h2>
          <p className="nb-body mt-4 max-w-2xl mx-auto">
            If you want a clean, fast, maintainable product—let’s talk.
          </p>
          <div className="mt-8 flex justify-center">
            <Button as={Link} to="/contact" size="lg">
              Contact <HiArrowRight size={16} />
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ContactCTA;
