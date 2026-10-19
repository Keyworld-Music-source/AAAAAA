<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep all editable public-facing site content and asset mappings in `src/data/site-content.ts` so updates remain centralized.
- Use shared site-shell and page-section components for the public marketing routes to preserve navigation and visual consistency.

- Carry programme, instrument, level and study mode through validated course search parameters so all entry points use the same course journey.
- Use a shared form delivery helper that checks provider success and rejects unconfigured keys so forms never display false delivery confirmations.

- Normalize vocal programme aliases at route boundaries; use the centralized display label so shared links remain compatible.
- Expose only the public Web3Forms form key from encrypted settings through Vite's existing client variable; private credentials must never use this mapping.

- Render programme choices through shared ProgrammePanels using centralized image mappings so home and course selection show the same backgrounds.
- Render Admission child links from the central navigation configuration on desktop and mobile so enrollment remains accessible without a standalone menu item.

- Keep privacy-policy copy centralized and link its dedicated public route from the shared footer so data-handling disclosures stay consistent.
