// ABOUTME: Unit tests for VideoBackground component ensuring proper video rendering and fallbacks
// ABOUTME: Tests autoplay, muted attributes, loading states and accessibility features

import { render, screen } from '@testing-library/react';
import { VideoBackground } from '../video-background';
import { describe, it, expect } from 'vitest';

describe('VideoBackground', () => {
  it('should render video element with correct attributes', () => {
    render(
      <VideoBackground
        src="/test-video.mp4"
        poster="/test-poster.jpg"
      />
    );

    const video = screen.getByRole('img', { hidden: true }); // video has img role when has poster
    expect(video).toBeInTheDocument();
    expect(video).toHaveAttribute('src', '/test-video.mp4');
    expect(video).toHaveAttribute('poster', '/test-poster.jpg');
    expect(video).toHaveAttribute('autoplay');
    expect(video).toHaveAttribute('muted');
    expect(video).toHaveAttribute('loop');
    expect(video).toHaveAttribute('playsInline');
  });

  it('should apply custom className', () => {
    render(
      <VideoBackground
        src="/test-video.mp4"
        className="custom-class"
      />
    );

    const container = screen.getByTestId('video-background');
    expect(container).toHaveClass('custom-class');
  });

  it('should render children overlay content', () => {
    render(
      <VideoBackground src="/test-video.mp4">
        <div>Overlay content</div>
      </VideoBackground>
    );

    expect(screen.getByText('Overlay content')).toBeInTheDocument();
  });

  it('should have proper accessibility attributes', () => {
    render(
      <VideoBackground
        src="/test-video.mp4"
        ariaLabel="Background video showing fleet management"
      />
    );

    const video = screen.getByLabelText('Background video showing fleet management');
    expect(video).toBeInTheDocument();
  });

  it('should render with default poster when not provided', () => {
    render(<VideoBackground src="/test-video.mp4" />);
    
    const video = screen.getByTestId('background-video');
    expect(video).not.toHaveAttribute('poster');
  });

  it('should handle loading state', () => {
    render(
      <VideoBackground 
        src="/test-video.mp4" 
        showLoader={true}
      />
    );

    expect(screen.getByTestId('video-loader')).toBeInTheDocument();
  });
});