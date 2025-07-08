// ABOUTME: Unit tests for AssetTrack header component with navigation and service dropdown
// ABOUTME: Tests logo, services dropdown menu, login link and consultation button functionality

import { render, screen, fireEvent } from '@testing-library/react';
import { AssetTrackHeader } from '../assettrack-header';
import { describe, it, expect, vi } from 'vitest';

const mockOnConsultationClick = vi.fn();

describe('AssetTrackHeader', () => {
  it('should render logo and main navigation elements', () => {
    render(<AssetTrackHeader onConsultationClick={mockOnConsultationClick} />);

    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('Log in')).toBeInTheDocument();
    expect(screen.getByText('Free Consultation')).toBeInTheDocument();
  });

  it('should render services dropdown menu items', () => {
    render(<AssetTrackHeader onConsultationClick={mockOnConsultationClick} />);

    const servicesButton = screen.getByText('Services');
    fireEvent.mouseOver(servicesButton);

    expect(screen.getByText('Fleet Management')).toBeInTheDocument();
    expect(screen.getByText('Audits & Consulting')).toBeInTheDocument();
    expect(screen.getByText('Data Visualization')).toBeInTheDocument();
  });

  it('should have correct external link for login', () => {
    render(<AssetTrackHeader onConsultationClick={mockOnConsultationClick} />);

    const loginLink = screen.getByText('Log in');
    expect(loginLink.closest('a')).toHaveAttribute('href', 'https://fleet.theassettrack.com');
    expect(loginLink.closest('a')).toHaveAttribute('target', '_blank');
  });

  it('should call consultation callback when button clicked', () => {
    render(<AssetTrackHeader onConsultationClick={mockOnConsultationClick} />);

    const consultationButton = screen.getByText('Free Consultation');
    fireEvent.click(consultationButton);

    expect(mockOnConsultationClick).toHaveBeenCalled();
  });

  it('should be fixed positioned with proper styling', () => {
    render(<AssetTrackHeader onConsultationClick={mockOnConsultationClick} />);

    const header = screen.getByRole('banner');
    expect(header).toHaveClass('fixed', 'top-0', 'z-50');
  });

  it('should use JetBrains Mono font', () => {
    render(<AssetTrackHeader onConsultationClick={mockOnConsultationClick} />);

    const header = screen.getByRole('banner');
    expect(header).toHaveClass('font-mono');
  });
});