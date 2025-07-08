// ABOUTME: Unit tests for TeamMember component testing profile display and social links
// ABOUTME: Tests image loading, LinkedIn integration and responsive layout for team profiles

import { render, screen } from '@testing-library/react';
import { TeamMember } from '../team-member';
import { describe, it, expect } from 'vitest';
import type { TeamMember as TeamMemberType } from '@/types';

const mockTeamMember: TeamMemberType = {
  id: 'john-doe',
  name: 'John Doe',
  role: 'Fleet Management Specialist',
  imageUrl: '/images/team/john-doe.jpg',
  linkedIn: 'https://linkedin.com/in/johndoe'
};

describe('TeamMember', () => {
  it('should render team member information correctly', () => {
    render(<TeamMember member={mockTeamMember} />);

    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Fleet Management Specialist')).toBeInTheDocument();
  });

  it('should render team member image with correct attributes', () => {
    render(<TeamMember member={mockTeamMember} />);

    const image = screen.getByAltText('John Doe');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/images/team/john-doe.jpg');
  });

  it('should render LinkedIn link when provided', () => {
    render(<TeamMember member={mockTeamMember} />);

    const linkedInLink = screen.getByLabelText('John Doe LinkedIn profile');
    expect(linkedInLink).toBeInTheDocument();
    expect(linkedInLink).toHaveAttribute('href', 'https://linkedin.com/in/johndoe');
    expect(linkedInLink).toHaveAttribute('target', '_blank');
    expect(linkedInLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('should not render LinkedIn link when not provided', () => {
    const memberWithoutLinkedIn = {
      ...mockTeamMember,
      linkedIn: undefined
    };

    render(<TeamMember member={memberWithoutLinkedIn} />);

    expect(screen.queryByLabelText('John Doe LinkedIn profile')).not.toBeInTheDocument();
  });

  it('should apply custom className', () => {
    render(<TeamMember member={mockTeamMember} className="custom-class" />);

    const card = screen.getByTestId('team-member');
    expect(card).toHaveClass('custom-class');
  });

  it('should render with compact variant', () => {
    render(<TeamMember member={mockTeamMember} variant="compact" />);

    const card = screen.getByTestId('team-member');
    expect(card).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });

  it('should handle image loading error gracefully', () => {
    render(<TeamMember member={mockTeamMember} />);

    const image = screen.getByAltText('John Doe');
    expect(image).toHaveAttribute('loading', 'lazy');
  });
});