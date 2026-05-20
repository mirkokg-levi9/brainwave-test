# Style

Visual rules for every feature. Keep it calm, neutral, consistent.

## Color

- Neutral base: Tailwind `zinc` (`zinc-50`..`zinc-900`).
- One accent only: `blue` (`blue-600` for actions/links).
- No other color families. Use shadcn variants (`secondary`,
  `outline`, `destructive`) instead of hand-picked colors.

## Spacing

- Generous and consistent: `p-6` for page/section padding,
  `gap-4` for stacked items, `gap-2` for label+input pairs.
- Center page content with `mx-auto` and a `max-w-*` cap.

## Typography

- Body text: `text-sm`.
- Headings: `text-2xl font-semibold`.
- Never bold mid-sentence. Weight changes mark structure, not emphasis.

## Layout

- Always responsive, mobile-first. Start with the small-screen layout,
  add `sm:` / `md:` / `lg:` modifiers to scale up.
