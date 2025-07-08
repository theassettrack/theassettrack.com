// ABOUTME: Unit tests for ServiceCard component testing service display and interactions
// ABOUTME: Tests video backgrounds, feature lists, CTA buttons and responsive behavior

import { render, screen } from '@testing-library/react';
import { ServiceCard } from '../service-card';
import { describe, it, expect, vi } from 'vitest';
import type { Service } from '@/types';

const mockService: Service = {
  id: 'fleet-management',
  title: 'Fleet Management',
  description: 'Comprehensive fleet tracking and management solutions',
  features: ['Real-time GPS tracking', 'Route optimization', 'Fuel monitoring'],
  videoUrl: '/videos/fleet-management.mp4',
  ctaText: 'Learn More',
  ctaLink: '/services/fleet-management'
};

describe('ServiceCard', () => {
  it('should render service information correctly', () => {
    render(<ServiceCard service={mockService} />);

    expect(screen.getByText('Fleet Management')).toBeInTheDocument();
    expect(screen.getByText('Comprehensive fleet tracking and management solutions')).toBeInTheDocument();
    expect(screen.getByText('Learn More')).toBeInTheDocument();
  });

  it('should render feature list', () => {
    render(<ServiceCard service={mockService} />);

    expect(screen.getByText('Real-time GPS tracking')).toBeInTheDocument();
    expect(screen.getByText('Route optimization')).toBeInTheDocument();
    expect(screen.getByText('Fuel monitoring')).toBeInTheDocument();
  });

  it('should render video background when videoUrl provided', () => {
    render(<ServiceCard service={mockService} />);

    const video = screen.getByTestId('background-video');
    expect(video).toHaveAttribute('src', '/videos/fleet-management.mp4');
  });

  it('should render image background when imageUrl provided instead of video', () => {
    const serviceWithImage = {
      ...mockService,
      videoUrl: undefined,
      imageUrl: '/images/fleet-management.jpg'
    };

    render(<ServiceCard service={serviceWithImage} />);

    expect(screen.queryByTestId('background-video')).not.toBeInTheDocument();
    expect(screen.getByTestId('background-image')).toHaveAttribute('src', '/images/fleet-management.jpg');
  });

  it('should apply custom className', () => {
    render(<ServiceCard service={mockService} className="custom-class" />);

    const card = screen.getByTestId('service-card');
    expect(card).toHaveClass('custom-class');
  });

  it('should handle CTA button click', () => {
    const onCtaClick = vi.fn();
    render(<ServiceCard service={mockService} onCtaClick={onCtaClick} />);

    const ctaButton = screen.getByText('Learn More');
    ctaButton.click();

    expect(onCtaClick).toHaveBeenCalledWith(mockService);
  });

  it('should render without video or image', () => {
    const serviceWithoutMedia = {
      ...mockService,
      videoUrl: undefined,
      imageUrl: undefined
    };

    render(<ServiceCard service={serviceWithoutMedia} />);

    expect(screen.queryByTestId('background-video')).not.toBeInTheDocument();
    expect(screen.queryByTestId('background-image')).not.toBeInTheDocument();
    expect(screen.getByText('Fleet Management')).toBeInTheDocument();
  });
});