# Elementa Design System

Elementa is a React and TypeScript design-system starter organized with atomic
design. It includes a small set of working components, design tokens, a live
showcase, and Storybook stories. Use it as a foundation and evolve the visual
language to fit your product.

## Run locally

```sh
npm install
npm run dev
```

Open Storybook to develop components in isolation:

```sh
npm run storybook
```

Check production compilation and types:

```sh
npm run build
```

## Structure

```text
src/
  foundations/         Design tokens and shared visual foundations
  components/
    atoms/             Actions, typography, inputs, display, and layout primitives
    molecules/         Fields, content helpers, and composed controls
    organisms/         Navigation, forms, overlays, discovery, and page regions
    templates/         Authentication, dashboard, settings, list/detail, form,
                       and search-results layouts
  pages/               Showcase and example product pages
  App.tsx              Application entry component
```

## Component catalog

Import components from the public barrel:

```tsx
import {
  Button,
  TextField,
  DataTable,
  DashboardLayout,
} from './components'
```

### Atoms

- **Actions:** `Button`, `IconButton`, `Link`
- **Typography:** `Text`, `Heading`, `VisuallyHidden`
- **Inputs:** `Input`, `Textarea`, `Checkbox`, `Radio`, `Switch`, `NativeSelect`
- **Display:** `Icon`, `Badge`, `Avatar`, `Spinner`, `Skeleton`, `Divider`,
  `Progress`
- **Layout:** `Box`, `Stack`, `Inline`, `Grid`, `Container`

### Molecules

`TextField`, `SelectField`, `CheckboxField`, `RadioGroup`, `SearchField`,
`PasswordField`, `InputGroup`, `FormActions`, `Alert`, `Breadcrumbs`,
`Pagination`, `Card`, `ListItem`, `EmptyState`, and `Tooltip`.

### Organisms

`Header`, `Sidebar`, `NavigationMenu`, `Form`, `DataTable`, `Dialog`, `Drawer`,
`Tabs`, `Accordion`, `ToastRegion`, `FilterPanel`, `FileUpload`, `DatePicker`,
`Combobox`, and `OrganizationForm`.

### Templates and example pages

Templates: `AuthenticationLayout`, `DashboardLayout`, `SettingsLayout`,
`ListDetailLayout`, `FormLayout`, `SearchResultsLayout`.

Example pages: `LoginPageExample`, `DashboardPageExample`,
`SettingsPageExample`, and `SearchResultsPageExample`.

The examples are starting points, not connected product flows. Data loading,
authorization, and persistence should be supplied by the consuming application.

### Atomic design guidelines

- **Foundations** define reusable decisions such as color, typography, spacing,
  radius, and elevation. Prefer semantic tokens like `--color-text-muted` in
  components instead of hard-coding values.
- **Atoms** own one primitive interaction or visual element and expose a small,
  typed API. They should not depend on product data or page layout.
- **Molecules** combine atoms into a single purposeful control, keeping labels,
  descriptions, and validation behavior accessible.
- **Organisms** compose molecules and atoms into distinct interface regions.
- **Templates** establish page structure and accept content through props or
  children; **pages** provide the actual content and data.
- Build and document each component in Storybook. Keep variants intentional,
  keyboard-accessible, and consistent with the tokens.
- Use the native semantic HTML elements in this standalone starter. The DDS
  package is not installed in this project; when consuming these patterns in an
  application that provides DDS, prefer its equivalent components and tokens.

The current palette and sample components are starter defaults, not fixed brand
requirements. Add new components at the lowest layer that makes sense and
promote them upward only when composition is needed.
