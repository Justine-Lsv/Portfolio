# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Administrative portfolio website for Justine Lasvenes targeting administrative positions (HR, secretarial, support, management). The site must convey **professionalism, reliability, organization** with a sober, clear design.

## Critical Architecture Rule

**ALL content data is stored exclusively in [INFO.md](INFO.md).**

- `INFO.md` is the single source of truth for all personal information, experiences, skills, contact details
- HTML contains only structure and semantic markup
- **Never hardcode any business content in HTML** (names, dates, job titles, descriptions, etc.)
- Always read `INFO.md` before generating or modifying HTML

## Tech Stack

**Allowed:**
- HTML5 (semantic markup: `header`, `nav`, `main`, `section`, `article`, `footer`)
- Tailwind CSS (CDN or simple build)
- Minimal JavaScript (site must be fully functional without JS; only use for mobile menu if needed)

**Prohibited:**
- JS frameworks (React, Vue, etc.)
- Heavy animations
- Unnecessary dependencies

## File Structure

```
/
├─ index.html        # Structure only, no hardcoded content
├─ INFO.md           # Single source of truth for all content
├─ assets/
│  ├─ images/
│  └─ icons/
└─ css/
   └─ tailwind.css
```

## Design Principles

- **Visual sobriety**: Neutral palette (grays, beige, soft blues), no decorative excess
- **Accessibility**: Sufficient contrast, keyboard navigation, aria-labels where needed
- **Responsive**: Mobile-first, smooth reading on narrow screens
- **Semantic HTML**: Single `h1`, proper heading hierarchy
- **Tailwind classes**: Readable, consistent spacing (`max-w-4xl mx-auto`, `text-slate-700`, `bg-slate-50`)

## Portfolio Sections

Required sections in order:
1. **Header** - Name, professional title, anchor navigation
2. **Presentation** - Brief professional paragraph (neutral, factual tone)
3. **Skills** - Categorized: savoir-faire, savoir-être, tools/software
4. **Professional Experience** - Reverse chronological: position, organization, dates, key missions
5. **Education** - Relevant diplomas and training
6. **Contact** - Simple methods (email, LinkedIn) - no complex forms

## Workflow

1. Read `INFO.md` to extract all content
2. Generate semantic `index.html` with proper structure
3. Apply Tailwind styling (mobile-first, sober palette)
4. Verify accessibility and administrative coherence

## Target Audience

- HR departments
- Public sector recruiters
- Administrative hiring managers

Priority: **clarity, structure, credibility** - not a developer portfolio.
