import { useState } from 'react';
import './ABTestingCalculatorPage.css';

function erf(x) {
  const sign = x < 0 ? -1 : 1;
  const absX = Math.abs(x);
  const a1 = 0.254829592;
  const a2 = -0.284496736;
  const a3 = 1.421413741;
  const a4 = -1.453152027;
  const a5 = 1.061405429;
  const p = 0.3275911;

  const t = 1 / (1 + p * absX);
  const y = 1 - (((((a5 * t + a4) * t + a3) * t + a2) * t + a1) * t * Math.exp(-absX * absX));

  return sign * y;
}

function normalCdf(x) {
  return 0.5 * (1 + erf(x / Math.SQRT2));
}

function inverseNormalCdf(p) {
  if (p <= 0 || p >= 1) {
    throw new Error('Probability must be between 0 and 1.');
  }

  const a = [-39.69683028665376, 220.9460984245205, -275.9285104469687, 138.357751867269, -30.66479806614716, 2.506628277459239];
  const b = [-54.47609879822406, 161.5858368580409, -155.6989798598866, 66.80131188771972, -13.28068155288572];
  const c = [-0.007784894002430293, -0.3223964580411365, -2.400758277161838, -2.549732539343734, 4.374664141464968, 2.938163982698783];
  const d = [0.007784695709041462, 0.3224671290700398, 2.445134137142996, 3.754408661907416];

  const plow = 0.02425;
  const phigh = 1 - plow;

  if (p < plow) {
    const q = Math.sqrt(-2 * Math.log(p));
    return (((((c[0] * q + c[1]) * q + c[2]) * q + c[3]) * q + c[4]) * q + c[5]) /
      ((((d[0] * q + d[1]) * q + d[2]) * q + d[3]) * q + 1);
  }

  if (p > phigh) {
    const q = Math.sqrt(-2 * Math.log(1 - p));
    return -(((((c[0] * q + c[1]) * q + c[2]) * q + c[3]) * q + c[4]) * q + c[5]) /
      ((((d[0] * q + d[1]) * q + d[2]) * q + d[3]) * q + 1);
  }

  const q = p - 0.5;
  const r = q * q;

  return (((((a[0] * r + a[1]) * r + a[2]) * r + a[3]) * r + a[4]) * r + a[5]) * q /
    (((((b[0] * r + b[1]) * r + b[2]) * r + b[3]) * r + b[4]) * r + 1);
}

function parsePositiveInt(value) {
  const parsed = Number.parseInt(value, 10);
  return Number.isFinite(parsed) ? parsed : NaN;
}

function parsePositiveFloat(value) {
  const parsed = Number.parseFloat(value);
  return Number.isFinite(parsed) ? parsed : NaN;
}

function formatPercent(value, digits = 2) {
  return `${(value * 100).toFixed(digits)}%`;
}

function formatSignedPercent(value, digits = 2) {
  const percent = value * 100;
  const sign = percent > 0 ? '+' : '';
  return `${sign}${percent.toFixed(digits)}%`;
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function formatInteger(value) {
  if (!Number.isFinite(value)) {
    return 'N/A';
  }

  return Math.round(value).toLocaleString('en-US');
}

function calculateObservedPower({ difference, seNull, seAlternative, alpha, hypothesis }) {
  if (!Number.isFinite(difference) || !Number.isFinite(seNull) || !Number.isFinite(seAlternative) || seNull <= 0 || seAlternative <= 0) {
    return NaN;
  }

  if (hypothesis === 'greater') {
    const zCritical = inverseNormalCdf(1 - alpha);
    const threshold = zCritical * seNull;
    const power = 1 - normalCdf((threshold - difference) / seAlternative);
    return clamp(power, 0, 1);
  }

  const zCritical = inverseNormalCdf(1 - (alpha / 2));
  const upperBoundary = zCritical * seNull;
  const lowerBoundary = -upperBoundary;

  const upperTail = 1 - normalCdf((upperBoundary - difference) / seAlternative);
  const lowerTail = normalCdf((lowerBoundary - difference) / seAlternative);

  return clamp(upperTail + lowerTail, 0, 1);
}

export default function ABTestingCalculatorPage() {
  const [pretestBaselineRate, setPretestBaselineRate] = useState('12');
  const [pretestMde, setPretestMde] = useState('10');
  const [pretestConfidenceLevel, setPretestConfidenceLevel] = useState('0.95');
  const [pretestPowerLevel, setPretestPowerLevel] = useState('0.8');
  const [pretestHypothesisType, setPretestHypothesisType] = useState('two-sided');
  const [pretestDailyVisitors, setPretestDailyVisitors] = useState('');
  const [pretestError, setPretestError] = useState('');
  const [pretestResult, setPretestResult] = useState(null);

  const [variantAVisitors, setVariantAVisitors] = useState('1000');
  const [variantAConversions, setVariantAConversions] = useState('120');
  const [variantBVisitors, setVariantBVisitors] = useState('1000');
  const [variantBConversions, setVariantBConversions] = useState('150');
  const [confidenceLevel, setConfidenceLevel] = useState('0.95');
  const [hypothesisType, setHypothesisType] = useState('two-sided');
  const [error, setError] = useState('');
  const [result, setResult] = useState(null);

  const handlePretestCalculate = (event) => {
    event.preventDefault();
    setPretestError('');

    const baselinePercent = parsePositiveFloat(pretestBaselineRate);
    const mdePercent = parsePositiveFloat(pretestMde);
    const confidence = parsePositiveFloat(pretestConfidenceLevel);
    const power = parsePositiveFloat(pretestPowerLevel);

    if (!Number.isFinite(baselinePercent) || baselinePercent <= 0 || baselinePercent >= 100) {
      setPretestResult(null);
      setPretestError('Baseline conversion rate must be between 0 and 100 (exclusive).');
      return;
    }

    if (!Number.isFinite(mdePercent) || mdePercent <= 0) {
      setPretestResult(null);
      setPretestError('Minimum detectable effect must be greater than 0.');
      return;
    }

    const dailyVisitors = pretestDailyVisitors === '' ? NaN : parsePositiveInt(pretestDailyVisitors);
    if (pretestDailyVisitors !== '' && (!Number.isFinite(dailyVisitors) || dailyVisitors <= 0)) {
      setPretestResult(null);
      setPretestError('Estimated daily visitors must be a whole number greater than 0.');
      return;
    }

    const baselineRate = baselinePercent / 100;
    const relativeMde = mdePercent / 100;
    const expectedRateB = baselineRate * (1 + relativeMde);

    if (expectedRateB >= 1) {
      setPretestResult(null);
      setPretestError('MDE is too large for this baseline rate. Reduce MDE or baseline rate.');
      return;
    }

    const absoluteDelta = expectedRateB - baselineRate;

    if (!Number.isFinite(absoluteDelta) || absoluteDelta <= 0) {
      setPretestResult(null);
      setPretestError('Unable to calculate required sample size with the current inputs.');
      return;
    }

    const alpha = 1 - confidence;
    const zAlpha = pretestHypothesisType === 'greater'
      ? inverseNormalCdf(1 - alpha)
      : inverseNormalCdf(1 - (alpha / 2));
    const zBeta = inverseNormalCdf(power);

    const pooledRate = (baselineRate + expectedRateB) / 2;
    const pooledVarianceTerm = Math.sqrt(2 * pooledRate * (1 - pooledRate));
    const unpooledVarianceTerm = Math.sqrt((baselineRate * (1 - baselineRate)) + (expectedRateB * (1 - expectedRateB)));

    const sampleSizePerVariant = Math.ceil(
      Math.pow((zAlpha * pooledVarianceTerm) + (zBeta * unpooledVarianceTerm), 2) / Math.pow(absoluteDelta, 2),
    );

    if (!Number.isFinite(sampleSizePerVariant) || sampleSizePerVariant <= 0) {
      setPretestResult(null);
      setPretestError('Unable to calculate required sample size with the current inputs.');
      return;
    }

    const totalSampleSize = sampleSizePerVariant * 2;
    const estimatedDurationDays = Number.isFinite(dailyVisitors)
      ? Math.ceil(totalSampleSize / dailyVisitors)
      : null;

    setPretestResult({
      baselineRate,
      expectedRateB,
      relativeMde,
      absoluteDelta,
      confidence,
      power,
      alpha,
      sampleSizePerVariant,
      totalSampleSize,
      estimatedDurationDays,
      pretestHypothesisType,
    });
  };

  const handleCalculate = (event) => {
    event.preventDefault();
    setError('');

    const visitorsA = parsePositiveInt(variantAVisitors);
    const conversionsA = parsePositiveInt(variantAConversions);
    const visitorsB = parsePositiveInt(variantBVisitors);
    const conversionsB = parsePositiveInt(variantBConversions);
    const confidence = Number.parseFloat(confidenceLevel);

    if (!Number.isFinite(visitorsA) || !Number.isFinite(visitorsB) || visitorsA <= 0 || visitorsB <= 0) {
      setResult(null);
      setError('Visitors for both variants must be numbers greater than 0.');
      return;
    }

    if (!Number.isFinite(conversionsA) || !Number.isFinite(conversionsB) || conversionsA < 0 || conversionsB < 0) {
      setResult(null);
      setError('Conversions for both variants must be numbers greater than or equal to 0.');
      return;
    }

    if (conversionsA > visitorsA || conversionsB > visitorsB) {
      setResult(null);
      setError('Conversions cannot be greater than visitors.');
      return;
    }

    const rateA = conversionsA / visitorsA;
    const rateB = conversionsB / visitorsB;
    const difference = rateB - rateA;
    const pooledRate = (conversionsA + conversionsB) / (visitorsA + visitorsB);
    const standardErrorA = Math.sqrt((rateA * (1 - rateA)) / visitorsA);
    const standardErrorB = Math.sqrt((rateB * (1 - rateB)) / visitorsB);
    const pooledSe = Math.sqrt(pooledRate * (1 - pooledRate) * ((1 / visitorsA) + (1 / visitorsB)));

    if (!Number.isFinite(pooledSe) || pooledSe === 0) {
      setResult(null);
      setError('Unable to calculate significance from the provided values.');
      return;
    }

    const zScore = difference / pooledSe;
    const pValue = hypothesisType === 'greater'
      ? 1 - normalCdf(zScore)
      : 2 * (1 - normalCdf(Math.abs(zScore)));

    const alpha = 1 - confidence;
    const zCritical = inverseNormalCdf(1 - (alpha / 2));
    const unpooledSe = Math.sqrt((rateA * (1 - rateA)) / visitorsA + (rateB * (1 - rateB)) / visitorsB);
    const ciLow = difference - zCritical * unpooledSe;
    const ciHigh = difference + zCritical * unpooledSe;

    const observedPower = calculateObservedPower({
      difference,
      seNull: pooledSe,
      seAlternative: unpooledSe,
      alpha,
      hypothesis: hypothesisType,
    });

    const relativeLift = rateA === 0 ? null : difference / rateA;
    const relativeCiLow = rateA === 0 ? null : ciLow / rateA;
    const relativeCiHigh = rateA === 0 ? null : ciHigh / rateA;

    const isSignificant = pValue < alpha;
    const confidenceFromP = clamp(1 - pValue, 0, 1);
    const winner = !isSignificant
      ? hypothesisType === 'greater'
        ? 'Variant B does not beat Variant A with statistical significance at the selected confidence level.'
        : 'No statistically significant winner at the selected confidence level.'
      : difference > 0
        ? 'Variant B is the statistically significant winner.'
        : 'Variant A is the statistically significant winner.';

    const liftText = relativeLift === null ? `${formatSignedPercent(difference)} absolute lift` : `${formatSignedPercent(relativeLift)} relative uplift`;

    const summary = !isSignificant
      ? `Variation B observed conversion rate (${formatPercent(rateB)}) shows ${liftText} versus variation A (${formatPercent(rateA)}), but the result is not significant at ${Math.round(confidence * 100)}% confidence.`
      : `Variation B observed conversion rate (${formatPercent(rateB)}) shows ${liftText} compared with variation A (${formatPercent(rateA)}). You can be ${Math.round(confidenceFromP * 100)}% confident this difference is not due to random chance.`;

    setResult({
      visitorsA,
      conversionsA,
      visitorsB,
      conversionsB,
      rateA,
      rateB,
      difference,
      relativeLift,
      zScore,
      pValue,
      confidence,
      ciLow,
      ciHigh,
      relativeCiLow,
      relativeCiHigh,
      standardErrorA,
      standardErrorB,
      standardErrorDifference: unpooledSe,
      observedPower,
      confidenceFromP,
      isSignificant,
      hypothesisType,
      alpha,
      winner,
      summary,
    });
  };

  return (
    <section className="ab-tools-page">
      <div className="ab-tools-container">
        <header className="ab-tools-header">
          <h1>A/B Testing Calculator</h1>
          <p>Plan your test sample size before launch and analyze statistical significance after your experiment runs.</p>
        </header>

        <div className="ab-pretest">
          <h2>Pre-test Calculator</h2>
          <p>
            Estimate how many visitors you need per variant to detect your target uplift.
          </p>

          <form className="ab-pretest-form" onSubmit={handlePretestCalculate}>
            <div className="ab-pretest-grid">
              <div className="ab-card">
                <label htmlFor="pretest-baseline">Baseline conversion rate (%)</label>
                <input
                  id="pretest-baseline"
                  type="number"
                  min="0.01"
                  max="99.99"
                  step="0.01"
                  value={pretestBaselineRate}
                  onChange={(event) => setPretestBaselineRate(event.target.value)}
                  required
                />
              </div>

              <div className="ab-card">
                <label htmlFor="pretest-mde">Minimum detectable effect (% relative uplift)</label>
                <input
                  id="pretest-mde"
                  type="number"
                  min="0.01"
                  step="0.01"
                  value={pretestMde}
                  onChange={(event) => setPretestMde(event.target.value)}
                  required
                />
              </div>

              <div className="ab-card">
                <label htmlFor="pretest-daily-visitors">Estimated daily visitors (optional)</label>
                <input
                  id="pretest-daily-visitors"
                  type="number"
                  min="1"
                  step="1"
                  value={pretestDailyVisitors}
                  onChange={(event) => setPretestDailyVisitors(event.target.value)}
                  placeholder="e.g. 5000"
                />
              </div>
            </div>

            <div className="ab-controls">
              <label htmlFor="pretest-hypothesis-type">Hypothesis</label>
              <select
                id="pretest-hypothesis-type"
                value={pretestHypothesisType}
                onChange={(event) => setPretestHypothesisType(event.target.value)}
              >
                <option value="two-sided">Two-sided (A ≠ B)</option>
                <option value="greater">One-sided (B &gt; A)</option>
              </select>

              <label htmlFor="pretest-confidence-level">Confidence level</label>
              <select
                id="pretest-confidence-level"
                value={pretestConfidenceLevel}
                onChange={(event) => setPretestConfidenceLevel(event.target.value)}
              >
                <option value="0.8">80%</option>
                <option value="0.9">90%</option>
                <option value="0.95">95%</option>
                <option value="0.99">99%</option>
              </select>

              <label htmlFor="pretest-power-level">Statistical power</label>
              <select
                id="pretest-power-level"
                value={pretestPowerLevel}
                onChange={(event) => setPretestPowerLevel(event.target.value)}
              >
                <option value="0.8">80%</option>
                <option value="0.85">85%</option>
                <option value="0.9">90%</option>
                <option value="0.95">95%</option>
              </select>

              <button className="cta-button ab-submit" type="submit">
                Calculate Sample Size
              </button>
            </div>

            {pretestError && <p className="ab-error">{pretestError}</p>}
          </form>

          {pretestResult && (
            <div className="ab-pretest-results">
              <div className="ab-metrics-grid">
                <div className="ab-metric">
                  <span>Baseline conversion rate</span>
                  <strong>{formatPercent(pretestResult.baselineRate)}</strong>
                </div>
                <div className="ab-metric">
                  <span>Target conversion rate (variant B)</span>
                  <strong>{formatPercent(pretestResult.expectedRateB)}</strong>
                </div>
                <div className="ab-metric">
                  <span>MDE (relative uplift)</span>
                  <strong>{formatSignedPercent(pretestResult.relativeMde)}</strong>
                </div>
                <div className="ab-metric">
                  <span>Required sample size / variant</span>
                  <strong>{formatInteger(pretestResult.sampleSizePerVariant)}</strong>
                </div>
                <div className="ab-metric">
                  <span>Total sample size</span>
                  <strong>{formatInteger(pretestResult.totalSampleSize)}</strong>
                </div>
                <div className="ab-metric">
                  <span>Estimated duration</span>
                  <strong>
                    {pretestResult.estimatedDurationDays === null
                      ? 'Add daily visitors'
                      : `${formatInteger(pretestResult.estimatedDurationDays)} day(s)`}
                  </strong>
                </div>
              </div>

              <p className="ab-pretest-note">
                Uses a two-proportion z-test approximation with {Math.round(pretestResult.confidence * 100)}% confidence and {Math.round(pretestResult.power * 100)}% power ({pretestResult.pretestHypothesisType === 'greater' ? 'one-sided' : 'two-sided'} hypothesis).
              </p>
            </div>
          )}
        </div>

        <form className="ab-form" onSubmit={handleCalculate}>
          <div className="ab-grid">
            <div className="ab-card">
              <h2>Variant A (Control)</h2>
              <label htmlFor="a-visitors">Visitors</label>
              <input
                id="a-visitors"
                type="number"
                min="1"
                step="1"
                value={variantAVisitors}
                onChange={(event) => setVariantAVisitors(event.target.value)}
                required
              />
              <label htmlFor="a-conversions">Conversions</label>
              <input
                id="a-conversions"
                type="number"
                min="0"
                step="1"
                value={variantAConversions}
                onChange={(event) => setVariantAConversions(event.target.value)}
                required
              />
            </div>

            <div className="ab-card">
              <h2>Variant B (Challenger)</h2>
              <label htmlFor="b-visitors">Visitors</label>
              <input
                id="b-visitors"
                type="number"
                min="1"
                step="1"
                value={variantBVisitors}
                onChange={(event) => setVariantBVisitors(event.target.value)}
                required
              />
              <label htmlFor="b-conversions">Conversions</label>
              <input
                id="b-conversions"
                type="number"
                min="0"
                step="1"
                value={variantBConversions}
                onChange={(event) => setVariantBConversions(event.target.value)}
                required
              />
            </div>
          </div>

          <div className="ab-controls">
            <label htmlFor="hypothesis-type">Hypothesis</label>
            <select
              id="hypothesis-type"
              value={hypothesisType}
              onChange={(event) => setHypothesisType(event.target.value)}
            >
              <option value="two-sided">Two-sided (A ≠ B)</option>
              <option value="greater">One-sided (B &gt; A)</option>
            </select>

            <label htmlFor="confidence-level">Confidence level</label>
            <select
              id="confidence-level"
              value={confidenceLevel}
              onChange={(event) => setConfidenceLevel(event.target.value)}
            >
              <option value="0.8">80%</option>
              <option value="0.9">90%</option>
              <option value="0.95">95%</option>
              <option value="0.99">99%</option>
            </select>

            <button className="cta-button ab-submit" type="submit">
              Calculate Result
            </button>
          </div>

          {error && <p className="ab-error">{error}</p>}
        </form>

        {result && (
          <div className="ab-results">
            <h2>Results</h2>
            <p className={`ab-winner ${result.isSignificant ? 'significant' : 'not-significant'}`}>
              {result.winner}
            </p>
            <p className="ab-summary">{result.summary}</p>

            <div className="ab-metrics-grid">
              <div className="ab-metric">
                <span>Conversion rate A</span>
                <strong>{formatPercent(result.rateA)}</strong>
              </div>
              <div className="ab-metric">
                <span>Conversion rate B</span>
                <strong>{formatPercent(result.rateB)}</strong>
              </div>
              <div className="ab-metric">
                <span>Absolute lift</span>
                <strong>{formatSignedPercent(result.difference)}</strong>
              </div>
              <div className="ab-metric">
                <span>Relative lift</span>
                <strong>
                  {result.relativeLift === null ? 'N/A (A = 0%)' : formatSignedPercent(result.relativeLift)}
                </strong>
              </div>
              <div className="ab-metric">
                <span>p-value ({result.hypothesisType === 'greater' ? 'one-tailed' : 'two-tailed'})</span>
                <strong>{result.pValue.toFixed(5)}</strong>
              </div>
              <div className="ab-metric">
                <span>z-score</span>
                <strong>{result.zScore.toFixed(3)}</strong>
              </div>
              <div className="ab-metric">
                <span>Observed power</span>
                <strong>{Number.isFinite(result.observedPower) ? formatPercent(result.observedPower) : 'N/A'}</strong>
              </div>
              <div className="ab-metric">
                <span>Standard error A</span>
                <strong>{result.standardErrorA.toFixed(6)}</strong>
              </div>
              <div className="ab-metric">
                <span>Standard error B</span>
                <strong>{result.standardErrorB.toFixed(6)}</strong>
              </div>
              <div className="ab-metric">
                <span>Std. error difference</span>
                <strong>{result.standardErrorDifference.toFixed(6)}</strong>
              </div>
            </div>

            <div className="ab-confidence">
              <p>
                {Math.round(result.confidence * 100)}% confidence interval for absolute lift: <strong>{formatSignedPercent(result.ciLow)}</strong> to <strong>{formatSignedPercent(result.ciHigh)}</strong>
              </p>
              <p>
                Estimated confidence from p-value: <strong>{formatPercent(result.confidenceFromP)}</strong>
              </p>
              <p>
                {result.relativeLift === null
                  ? 'Relative confidence interval is unavailable because Variant A conversion rate is 0%.'
                  : `${Math.round(result.confidence * 100)}% confidence interval for relative lift: ${formatSignedPercent(result.relativeCiLow)} to ${formatSignedPercent(result.relativeCiHigh)}`}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
