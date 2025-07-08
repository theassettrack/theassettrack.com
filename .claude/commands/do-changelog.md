# AI Agent: CHANGELOG.md Management Instructions

## Standard Structure

### File Format
```
# Changelog

## [Unreleased]
### Added
### Changed
### Deprecated
### Removed
### Fixed
### Security

## [X.Y.Z] - YYYY-MM-DD
### Added
### Changed
### Fixed
### Security
```

### Versioning Rules
- **MAJOR**: breaking changes
- **MINOR**: new features (backward compatible)
- **PATCH**: bug fixes

## Operations

### 1. Create New Changelog
Create `CHANGELOG.md` with:
- Header and [Unreleased] section
- All 6 category headers
- First version [1.0.0] if new project

### 2. Add Change to [Unreleased]
Add entry under appropriate category:
- **Added**: new features
- **Changed**: modifications to existing functionality
- **Deprecated**: features marked for removal
- **Removed**: deleted features
- **Fixed**: bug fixes
- **Security**: vulnerability fixes

### 3. Create Release
- Create new `## [VERSION] - DATE` section
- Move all [Unreleased] entries to new section
- Clear [Unreleased] but keep category headers
- Use format: `## [1.2.0] - 2025-01-15`

### 4. Update Existing Release
Add entry to specific version section under appropriate category.

## Writing Standards

### Good Examples
- "Added UserProfile component for user information display"
- "Fixed date rendering bug in Safari browsers"
- "Updated React from 17.0.2 to 18.2.0"
- "Improved list performance by 30%"

### Bad Examples
- "Fixed bug in component"
- "Updated dependencies"
- "Minor fixes"

### Principles
- Be specific and descriptive
- Mention affected components/features
- Use active voice
- Write for end users

## Special Cases

### Breaking Changes
Prefix with `BREAKING:` in **Changed** section:
```
### Changed
- BREAKING: Redesigned authentication API endpoints
```

### Deprecation
Include removal timeline:
```
### Deprecated
- LegacyButton component (will be removed in v2.0.0)
```

### Security
Include severity when possible:
```
### Security
- Fixed critical XSS vulnerability in user input validation
```

## Validation Rules

Check for:
- Proper semantic versioning
- Date format: YYYY-MM-DD
- Required section headers
- Chronological version order
- Non-empty release sections

## Quick Templates

### Component Addition
`Added [ComponentName] component for [purpose]`

### Bug Fix
`Fixed [issue] in [location/component]`

### Performance
`Improved [feature] performance by [amount/percentage]`

### Dependency Update
`Updated [package] from [old] to [new] version`

This format ensures consistent, readable changelog maintenance across all projects.