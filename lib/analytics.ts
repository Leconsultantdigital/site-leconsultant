/**
 * Google Analytics 4 Event Tracking Utility
 * Use these functions to track key conversions and user interactions
 */

// Define event types for type safety
type EventNames =
  | 'click_cta'
  | 'view_service'
  | 'start_contact_form'
  | 'submit_contact_form'
  | 'click_calendly'
  | 'scroll_depth'
  | 'view_testimonial'
  | 'view_faq';

interface EventParams {
  [key: string]: string | number | boolean;
}

/**
 * Send an event to Google Analytics 4
 * @param eventName - The name of the event
 * @param params - Optional parameters for the event
 *
 * Example:
 * trackEvent('click_cta', { cta_text: 'Réserver audit', section: 'hero' });
 */
export function trackEvent(eventName: EventNames, params?: EventParams): void {
  if (typeof window === 'undefined') return; // Avoid SSR errors

  // Check if gtag is available
  if (!('gtag' in window)) {
    console.warn('Google Analytics not loaded');
    return;
  }

  try {
    const gtag = (window as any).gtag;
    gtag('event', eventName, {
      ...params,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Error tracking event:', error);
  }
}

/**
 * Track CTA clicks
 * Use in buttons and links for conversion tracking
 */
export function trackCTAClick(ctaText: string, location: string): void {
  trackEvent('click_cta', {
    cta_text: ctaText,
    location: location,
  });
}

/**
 * Track form submissions
 * Call this when contact form is successfully submitted
 */
export function trackFormSubmission(formType: string = 'contact'): void {
  trackEvent('submit_contact_form', {
    form_type: formType,
  });
}

/**
 * Track service page views
 * Call when user lands on a service detail page
 */
export function trackServiceView(serviceName: string): void {
  trackEvent('view_service', {
    service_name: serviceName,
  });
}

/**
 * Track scroll depth
 * Useful to see if users scroll through the page
 */
export function trackScrollDepth(depth: number): void {
  trackEvent('scroll_depth', {
    depth_percent: depth,
  });
}

/**
 * Track Calendly link clicks
 */
export function trackCalendlyClick(): void {
  trackEvent('click_calendly', {
    link_type: 'calendly',
  });
}

/**
 * Track FAQ section views
 */
export function trackFAQView(question: string): void {
  trackEvent('view_faq', {
    question_topic: question,
  });
}

/**
 * Track testimonial carousel interactions
 */
export function trackTestimonialView(authorName: string): void {
  trackEvent('view_testimonial', {
    author_name: authorName,
  });
}
