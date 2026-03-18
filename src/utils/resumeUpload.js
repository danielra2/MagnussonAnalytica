const CLOUDINARY_CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const CLOUDINARY_UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

const getCloudinaryUploadUrl = (cloudName) => `https://api.cloudinary.com/v1_1/${cloudName}/raw/upload`;

const ensureCloudinaryConfig = () => {
  if (!CLOUDINARY_CLOUD_NAME || !CLOUDINARY_UPLOAD_PRESET) {
    throw new Error('CV upload is not configured. Please set VITE_CLOUDINARY_CLOUD_NAME and VITE_CLOUDINARY_UPLOAD_PRESET.');
  }
};

const extractUploadedFileName = (payload, fallbackName) => {
  const originalName = payload?.original_filename;
  const fileFormat = payload?.format;

  if (!originalName) {
    return fallbackName;
  }

  return fileFormat ? `${originalName}.${fileFormat}` : originalName;
};

export async function uploadResumePdf(file) {
  if (!(file instanceof File)) {
    throw new Error('Missing CV file.');
  }

  if (file.type !== 'application/pdf') {
    throw new Error('Please upload your CV as a PDF file.');
  }

  ensureCloudinaryConfig();

  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
  formData.append('folder', 'career-applications');

  const response = await fetch(getCloudinaryUploadUrl(CLOUDINARY_CLOUD_NAME), {
    method: 'POST',
    body: formData,
  });

  const payload = await response.json().catch(() => null);

  if (!response.ok || !payload?.secure_url) {
    const errorMessage = payload?.error?.message || 'Could not upload CV. Please try again.';
    throw new Error(errorMessage);
  }

  return {
    resumeUrl: payload.secure_url,
    fileName: extractUploadedFileName(payload, file.name),
  };
}
