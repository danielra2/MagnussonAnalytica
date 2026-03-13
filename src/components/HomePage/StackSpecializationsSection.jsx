import React from 'react';
import { STACK_SPECIALIZATIONS } from '../../constants/capabilities';
import './StackSpecializationsSection.css';

export default function StackSpecializationsSection() {
  return (
    <section className="stack-specializations-section" aria-labelledby="stack-specializations-title">
      <div className="stack-specializations-container">
        <p className="stack-specializations-kicker">Capabilities</p>
        <h2 id="stack-specializations-title">Stack specialisations, shown explicitly</h2>
        <p className="stack-specializations-lead">
          We deliver strategy and implementation across the analytics, growth, and data tooling your teams use every day.
        </p>

        <div className="stack-specializations-grid">
          {STACK_SPECIALIZATIONS.map((group) => (
            <article key={group.area} className="stack-specialization-card">
              <h3>{group.area}</h3>
              <div className="stack-tags" aria-label={`${group.area} tools`}>
                {group.tools.map((tool) => (
                  <span key={tool} className="stack-tag">{tool}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
