import { Component, signal } from '@angular/core';
import { MatCard, MatCardContent, MatCardTitle } from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import { MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/autocomplete';

@Component({
  selector: 'app-integrations',
  imports: [
    MatCard,
    MatCardContent,
    MatCardTitle,
    MatButton,
    MatFormField,
    MatInput,
    MatFormField,
    MatOption,
    MatSelect,
    MatLabel
  ],
  templateUrl: './integrations.component.html',
  styleUrl: './integrations.component.scss'
})
export class IntegrationsComponent {
  services = signal<any[]>([
    {
      name: 'Stripe',
      logoUrl: 'assets/integrations/stripe.svg',
      description: 'Stripe makes it easy for any business to accept payments online.',
      isConfigured: false,
      type: 'stripe'
    },
    {
      name: 'Resend',
      logoUrl: 'assets/integrations/resend.svg',
      description: 'A modern email API to reliably send transactional and marketing emails from your app.',
      isConfigured: false,
      type: 'resend'
    },
    {
      name: 'Discord',
      logoUrl: 'assets/integrations/discord.svg',
      description: 'The all-in-one voice, video, and text chat for your communities.',
      isConfigured: false,
      type: 'discord'
    },
    {
      name: 'Chat GPT',
      logoUrl: 'assets/integrations/chat-gpt.svg',
      description: 'A powerful conversational AI from OpenAI designed to understand and generate human-like text.',
      isConfigured: false,
      type: 'chat-gpt'
    },
    {
      name: 'Google Analytics',
      logoUrl: 'assets/integrations/google-analytics.svg',
      description: 'A web analytics service that tracks and reports website traffic and user engagement.',
      isConfigured: false,
      type: 'google-analytics'
    },
    {
      name: 'GitHub',
      logoUrl: 'assets/integrations/github.svg',
      description: 'The leading platform for code hosting, version control, and collaboration.',
      isConfigured: false,
      type: 'github'
    },
    {
      name: 'Slack',
      logoUrl: 'assets/integrations/slack.svg',
      description: 'A channel-based messaging platform for team communication and collaboration.',
      isConfigured: false,
      type: 'slack'
    },
    {
      name: 'Vercel',
      logoUrl: 'assets/integrations/vercel.svg',
      description: 'A cloud platform for static sites and Serverless Functions that fits perfectly with your workflow.',
      isConfigured: false,
      type: 'vercel'
    },
    {
      name: 'Notion',
      logoUrl: 'assets/integrations/notion.svg',
      description: 'The all-in-one workspace for your notes, tasks, wikis, and databases.',
      isConfigured: false,
      type: 'notion'
    },
    {
      name: 'Sentry',
      logoUrl: 'assets/integrations/sentry.svg',
      description: 'Real-time error tracking and performance monitoring for your applications.',
      isConfigured: false,
      type: 'sentry'
    },
    {
      name: 'HubSpot',
      logoUrl: 'assets/integrations/hubspot.svg',
      description: 'A full platform of marketing, sales, and customer service software.',
      isConfigured: false,
      type: 'hubspot'
    },
    {
      name: 'Supabase',
      logoUrl: 'assets/integrations/supabase.svg',
      description: 'The open source Firebase alternative to build backends in a weekend.',
      isConfigured: false,
      type: 'supabase'
    },
    {
      name: 'Linear',
      logoUrl: 'assets/integrations/linear.svg',
      description: 'The modern issue tracker for high-performance teams.',
      isConfigured: false,
      type: 'linear'
    },
    {
      name: 'Clerk',
      logoUrl: 'assets/integrations/clerk.svg',
      description: 'A complete suite of embeddable UIs, APIs, and admin dashboards for user authentication.',
      isConfigured: false,
      type: 'clerk'
    },
    {
      name: 'Algolia',
      logoUrl: 'assets/integrations/algolia.svg',
      description: 'A powerful API for building fast and relevant search and discovery experiences.',
      isConfigured: false,
      type: 'algolia'
    },
    {
      name: 'Sanity',
      logoUrl: 'assets/integrations/sanity.svg',
      description: 'The unified content platform that powers better digital experiences.',
      isConfigured: false,
      type: 'sanity'
    },
    {
      name: 'Mailchimp',
      logoUrl: 'assets/integrations/mailchimp.svg',
      description: 'An all-in-one marketing platform for small businesses to manage and talk to their clients.',
      isConfigured: false,
      type: 'mailchimp'
    },
    {
      name: 'Twilio',
      logoUrl: 'assets/integrations/twilio.svg',
      description: 'A customer engagement platform to build unique communication experiences with APIs for SMS, voice, and video.',
      isConfigured: false,
      type: 'twilio'
    },
    {
      name: 'Figma',
      logoUrl: 'assets/integrations/figma.svg',
      description: 'The collaborative interface design tool for building products faster, from start to finish.',
      isConfigured: false,
      type: 'figma'
    },
    {
      name: 'Zapier',
      logoUrl: 'assets/integrations/zapier.svg',
      description: 'Automate your workflows by connecting your favorite apps and services without writing any code.',
      isConfigured: false,
      type: 'zapier'
    }
  ]);
}
