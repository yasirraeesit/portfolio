// @flow strict
import { GitHubCalendar } from 'react-github-calendar';
import { personalData } from '@/utils/data/personal-data';
import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';
import { useState } from 'react';

function GitHubActivity() {
  const username = personalData.devUsername;
  const [hasError, setHasError] = useState(false);

  return (
    <section id="github" className="nb-section nb-section-shell">
      <div className="nb-container">
        <SectionHeader
          eyebrow="GitHub"
          title="Contribution activity"
          subtitle="A quick view of recent consistency and open-source contributions."
        />

        <Card className="mt-10 p-6 md:p-8 overflow-hidden relative">
          <div className="absolute right-0 top-0 h-28 w-28 bg-[radial-gradient(circle,rgba(52,211,153,0.18),transparent_68%)]" />
          {hasError ? (
            <div>
              <p className="nb-h3">Calendar unavailable</p>
              <p className="nb-body mt-3">
                Please refresh or visit my GitHub profile directly:{" "}
                <a className="underline text-[var(--nb-fg)]" href={personalData.github} target="_blank" rel="noreferrer">
                  {username}
                </a>
              </p>
            </div>
          ) : (
            <div className="w-full overflow-x-auto py-2">
              <GitHubCalendar
                username={username}
                blockSize={12}
                blockMargin={5}
                fontSize={14}
                theme={{
                  light: ['#0b0b10', '#34d399'],
                  dark: ['#0b0b10', '#34d399'],
                }}
                onError={() => setHasError(true)}
              />
            </div>
          )}
        </Card>
      </div>
    </section>
  );
};

export default GitHubActivity;
