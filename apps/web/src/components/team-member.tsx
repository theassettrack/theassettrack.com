// ABOUTME: Team member card component displaying professional profiles with social links
// ABOUTME: Supports multiple layouts, LinkedIn integration and optimized image loading for team pages

import { cn } from "@/lib/utils";
import type { TeamMember as TeamMemberType } from "@/types";
import { ExternalLink, Linkedin } from "lucide-react";

interface TeamMemberProps {
  member: TeamMemberType;
  className?: string;
  variant?: "default" | "compact";
}

export function TeamMember({ 
  member, 
  className,
  variant = "default" 
}: TeamMemberProps) {
  return (
    <div 
      className={cn(
        "bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300",
        variant === "compact" ? "p-4" : "p-6",
        className
      )}
      data-testid="team-member"
    >
      <div className={cn(
        "flex items-center gap-4",
        variant === "compact" ? "flex-row" : "flex-col text-center"
      )}>
        {/* Profile Image */}
        <div className={cn(
          "relative overflow-hidden rounded-full bg-asset-light",
          variant === "compact" ? "w-16 h-16" : "w-24 h-24 mx-auto"
        )}>
          <img
            src={member.imageUrl}
            alt={member.name}
            className="w-full h-full object-cover"
            loading="lazy"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
        </div>

        {/* Member Info */}
        <div className="flex-1 min-w-0">
          <h3 className={cn(
            "font-semibold text-asset-dark",
            variant === "compact" ? "text-lg" : "text-xl mb-1"
          )}>
            {member.name}
          </h3>
          
          <p className={cn(
            "text-asset-gray",
            variant === "compact" ? "text-sm" : "text-base mb-3"
          )}>
            {member.role}
          </p>

          {/* LinkedIn Link */}
          {member.linkedIn && (
            <div className={cn(
              "flex justify-center",
              variant === "compact" ? "mt-2" : "mt-4"
            )}>
              <a
                href={member.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name} LinkedIn profile`}
                className="inline-flex items-center gap-2 text-sm text-asset-blue hover:text-asset-dark transition-colors duration-200"
              >
                <Linkedin className="w-4 h-4" />
                <span className="hidden sm:inline">LinkedIn</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}