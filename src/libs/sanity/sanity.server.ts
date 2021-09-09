import createClient, { ClientConfig } from '@sanity/client';

const sanityConfig: ClientConfig = {
  dataset: process.env.SANITY_DATASET || 'production',
  projectId: process.env.SANITY_PROJECT_ID,
  useCdn: process.env.NODE_ENV === 'production',
  apiVersion: '2021-09-09',
};

export const sanityClient = createClient(sanityConfig);

export const previewClient = createClient({
  ...sanityConfig,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

export const getClient = (preview: boolean) =>
  preview ? previewClient : sanityClient;
