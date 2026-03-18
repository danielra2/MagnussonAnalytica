import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_m41gwtd';
const PUBLIC_KEY = 'GEnLWxa4I1fUOYec7';
const USER_CONFIRM_TEMPLATE_ID = 'template_1irt9em';
const INTERNAL_ALERT_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_CAREERS_INTERNAL_TEMPLATE_ID || 'template_63sudqc';
const DEFAULT_CAREERS_ALERT_EMAILS = 'horatiu@magnussonanalytica.com, daniel.radoi@magnussonanalytica.com';

const CAREERS_ALERT_EMAILS = (
  import.meta.env.VITE_CAREERS_ALERT_EMAILS ||
  import.meta.env.VITE_CAREERS_ALERT_EMAIL ||
  DEFAULT_CAREERS_ALERT_EMAILS
).trim();

const PRIMARY_CAREERS_EMAIL =
  CAREERS_ALERT_EMAILS.split(',').map((email) => email.trim()).filter(Boolean)[0] || 'careers@magnussonanalytica.com';

const getDisplayValue = (value) => {
  if (typeof value !== 'string') {
    return value ?? 'N/A';
  }

  const trimmedValue = value.trim();
  return trimmedValue || 'N/A';
};

const getFirstName = (fullName) => {
  const normalizedName = getDisplayValue(fullName);

  if (normalizedName === 'N/A') {
    return 'there';
  }

  return normalizedName.split(/\s+/)[0];
};

export async function submitCareerApplication({
  roleTitle,
  applicantName,
  applicantEmail,
  pageUri,
  fields,
}) {
  const normalizedRoleTitle = getDisplayValue(roleTitle);
  const normalizedApplicantName = getDisplayValue(applicantName);
  const normalizedApplicantEmail = getDisplayValue(applicantEmail);
  const normalizedPageUri = getDisplayValue(pageUri);

  const message = [
    'New career application received.',
    `Role: ${normalizedRoleTitle}`,
    `Applicant: ${normalizedApplicantName}`,
    `Email: ${normalizedApplicantEmail}`,
    `Page: ${normalizedPageUri}`,
    '',
    'Application details:',
    ...fields.map(({ label, value }) => `${label}: ${getDisplayValue(value)}`),
  ].join('\n');

  const userTemplateParams = {
    to_name: getFirstName(applicantName),
    to_email: normalizedApplicantEmail,
    role_title: normalizedRoleTitle,
  };

  const internalTemplateParams = {
    subject: `Career application - ${normalizedRoleTitle}`,
    from_name: normalizedApplicantName,
    from_email: normalizedApplicantEmail,
    applicant_name: normalizedApplicantName,
    applicant_email: normalizedApplicantEmail,
    role_title: normalizedRoleTitle,
    page_uri: normalizedPageUri,
    message,
    to_email: PRIMARY_CAREERS_EMAIL,
    team_emails: CAREERS_ALERT_EMAILS,
    careers_email: PRIMARY_CAREERS_EMAIL,
  };

  await Promise.all([
    emailjs.send(SERVICE_ID, USER_CONFIRM_TEMPLATE_ID, userTemplateParams, PUBLIC_KEY),
    emailjs.send(SERVICE_ID, INTERNAL_ALERT_TEMPLATE_ID, internalTemplateParams, PUBLIC_KEY),
  ]);
}