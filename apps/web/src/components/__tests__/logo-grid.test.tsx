// ABOUTME: Unit tests for LogoGrid component testing partner logo display and grid layouts
// ABOUTME: Tests responsive behavior, accessibility features and logo optimization for partner sections

import { render, screen } from '@testing-library/react';
import { LogoGrid } from '../logo-grid';
import { describe, it, expect } from 'vitest';
import type { Partner } from '@/types';

const mockPartners: Partner[] = [
  {
    id: 'company-1',
    name: 'TechCorp',
    logoUrl: '/images/partners/techcorp.png',
    website: 'https://techcorp.com'
  },
  {
    id: 'company-2',
    name: 'FleetPro',
    logoUrl: '/images/partners/fleetpro.png',
    website: 'https://fleetpro.com'
  },
  {
    id: 'company-3',
    name: 'LogiSoft',
    logoUrl: '/images/partners/logisoft.png'
  }
];

describe('LogoGrid', () => {
  it('should render all partner logos', () => {
    render(<LogoGrid partners={mockPartners} />);

    expect(screen.getByAltText('TechCorp logo')).toBeInTheDocument();
    expect(screen.getByAltText('FleetPro logo')).toBeInTheDocument();
    expect(screen.getByAltText('LogiSoft logo')).toBeInTheDocument();
  });

  it('should render logos with correct image sources', () => {
    render(<LogoGrid partners={mockPartners} />);

    const techCorpLogo = screen.getByAltText('TechCorp logo');
    const fleetProLogo = screen.getByAltText('FleetPro logo');

    expect(techCorpLogo).toHaveAttribute('src', '/images/partners/techcorp.png');
    expect(fleetProLogo).toHaveAttribute('src', '/images/partners/fleetpro.png');
  });

  it('should render clickable logos when website is provided', () => {
    render(<LogoGrid partners={mockPartners} />);

    const techCorpLink = screen.getByRole('link', { name: /TechCorp logo/i });
    const fleetProLink = screen.getByRole('link', { name: /FleetPro logo/i });

    expect(techCorpLink).toHaveAttribute('href', 'https://techcorp.com');
    expect(fleetProLink).toHaveAttribute('href', 'https://fleetpro.com');
    expect(techCorpLink).toHaveAttribute('target', '_blank');
    expect(techCorpLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('should render non-clickable logos when website is not provided', () => {
    render(<LogoGrid partners={mockPartners} />);

    const logiSoftLogo = screen.getByAltText('LogiSoft logo');
    
    // Should not be wrapped in a link
    expect(logiSoftLogo.closest('a')).toBeNull();
  });

  it('should apply custom className', () => {
    render(<LogoGrid partners={mockPartners} className="custom-class" />);

    const grid = screen.getByTestId('logo-grid');
    expect(grid).toHaveClass('custom-class');
  });

  it('should use custom columns count', () => {
    render(<LogoGrid partners={mockPartners} columns={2} />);

    const grid = screen.getByTestId('logo-grid');
    expect(grid).toHaveClass('grid-cols-2');
  });

  it('should handle grayscale variant', () => {
    render(<LogoGrid partners={mockPartners} variant="grayscale" />);

    const firstLogo = screen.getByAltText('TechCorp logo');
    expect(firstLogo).toHaveClass('grayscale');
  });

  it('should render empty state when no partners provided', () => {
    render(<LogoGrid partners={[]} />);

    const grid = screen.getByTestId('logo-grid');
    expect(grid).toBeEmptyDOMElement();
  });

  it('should optimize image loading with lazy loading', () => {
    render(<LogoGrid partners={mockPartners} />);

    const logos = screen.getAllByRole('img');
    logos.forEach(logo => {
      expect(logo).toHaveAttribute('loading', 'lazy');
    });
  });
});