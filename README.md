# Feed The Future NPO - Web Portfolio Blueprint Documentation (WEDE5020)


## Technical Project Identifiers
*   **Institution Site:** IIE Rosebank College  
*   **Module Code Label:** WEDE5020 (Introduction to Web Development Project)  
*   **Artifact Type:** Portfolio of Evidence (POE) Submission Document  
*   **Current Development Phase:** Task 1 & Task 2 Execution Review  
*   **Development Utility:** Visual Studio Code IDE Architecture Pipeline  


## 1. Project Goal
The **Feed The Future** multi-page website serves as an informational platform for a South African Non-Profit Organisation (NPO) combating primary school classroom hunger across Gauteng. 

The build focuses strictly on **Introductory HTML5 Structure** and **Foundational CSS Core Properties**. It provides a lightweight user experience across desktops and mobile web viewports without using complex structural layout frameworks or preprocessors.


## 2. Directory & Application File Tree Layout
The files are arranged cleanly to allow academic markers to easily verify relative resource paths:

FeedTheFuture_POE/
│
├── index.html              # Main Landing / NPO Target Statement Entry Page
├── about.html              # Core History & Team Leadership Showcase Page
├── impact.html             # Audit Metrics / Descriptive and Tabular Grid Page
├── gallery.html            # Photographic Documentation Component Layout
├── volunteer.html          # Registration & Data Entry Application Form
├── contact.html            # Geolocation Address Framework and Office Mapping
│
├── css/
│   └── style.css           # Global Basic Positioning Rules Stylesheet Layer
│
└── images/
    ├── download(1).png                 # Visual Identity Asset
    ├── director.jpg                    # About Page Team Identity image placeholder
    ├── operations coordinator.jpg      # About Page Team Identity image placeholder
    ├── children lunch.jpg              # Gallery Documentation Graphic Matrix Item
    ├── childreneatingtogrther.jpg      # Gallery Documentation Graphic Matrix Item
    ├── community garden.jpg            # Gallery Documentation Graphic Matrix Item
    ├─  group of volunteers.jpg         # Gallery Documentation Graphic Matrix Item
    ├── studentholdigapple.jpg          # Gallery Documentation Graphic Matrix Item
    └── volunteers.jpg                  # Gallery Documentation Graphic Matrix Item

## 3. Structural Breakdown (Task 1 Architecture)
The project structure uses foundational, accessible HTML coding principles:
*   **Semantic Organizers:** Built with distinct layout divisions (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, and `<footer>`) instead of generic structural dividers (`<div>`).
*   **Data Arrays:** Custom data layouts were engineered inside `impact.html` via a structural definition list (`<dl>`), as well as a semantic financial matrix grid (`<table>`) complete with structural sub-elements (`<thead>`, `<tbody>`, `<tfoot>`, `<caption>`).
*   **Data Forms:** Features an administrative capture form layout inside `volunteer.html`, complete with varied input fields (`text`, `email`, `tel`, `radio`, `checkbox`, `select`) properly bound to text placeholders using explicit accessibility configurations (`id=""` tracking `for=""` label tags).
---

## 4. Visual Layout Strategy (Task 2 Properties)
The system styling relies on introductory CSS design principles to handle interface positioning, visibility, and page flow:


### A. Alignment Mechanics & Box Control Fixes
*   **Block Centering Algorithms:** Implemented `margin: 0 auto;` rules combined with strict `width` variables on the `<main>` container block elements to cleanly center content layouts automatically across variable workstation screens.
*   **Inline Block Layout Rows:** The code maps elements horizontally (`display: inline-block;`) inside both the `<nav>` menu line and the `#stats` grid panel to line blocks up side-by-side cleanly without complex container logic rules.
*   **Layout Float Implementations:** Built an operational photographic image grid array in `gallery.html` using basic floating parameters (`float: left;`) combined with relative percentage-based widths (`width: 31%;`). To ensure stability, an `overflow: hidden;` rule wrapper handles layout processing internally across container cells.
*   **Text Reflow Control Elements:** Paragraph blocks use direct justification mapping overrides (`text-align: justify;`) to produce crisp text layout columns that are easy for readers to parse.


### B. Viewport Scaling & Mobile Re-flow Configurations
Responsive adjustments rely on simple mobile-reflow breakpoints (`@media`). When viewports compress down underneath tablet display levels (768px thresholds), floated image galleries drop layout styling parameters (`float: none;`), inline metric cards scale back out to full layout boundaries (`width: 100%;`), and multi-column panels wrap into accessible single-row vertical cards.


---


## 5. Deployment Instructions
To preview your work before evaluation:
1. Extract the primary project folder to any local directory path.
2. Launch a modern web browser application (e.g., Google Chrome, Mozilla Firefox).
3. Open `index.html` to load the application tree wrapper.
4. Test the site flow by clicking through the header link options to verify your pathing setups.


---


## 6. Academic Resource Reference Index (IIE Harvard Compliance)


Duckett, J. 2011. *HTML & CSS: Design and Build Websites*. Indianapolis: Wiley.

Google. 2026. Gemini Ai (Version 3.0). [Research model]. Available at: https://gemini.google.com/app [accessed: 29 May 2026]

The Independent Institute of Education (The IIE). 2024. *Web Development (Introduction) WEDE5020 Module Outline*. Sandton: The IIE.


The Independent Institute of Education (The IIE). 2025. *IIE Harvard Style Reference Guide*. [Online]. Available from: https://iielearn.ac.za [Accessed 3 April 2026].


W3Schools. 2026. *CSS Introduction*. [Online]. Available from: https://w3schools.com [Accessed 19 April 2026].


W3Schools. 2026. *CSS Responsive Web. [Online]. Available from: https://w3schools.com [Accessed 19 April 2026].

