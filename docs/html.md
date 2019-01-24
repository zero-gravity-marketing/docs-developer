---
title: HTML
---
# HTML

## Table Of Contents

1. [Semantics](#semantics)
2. [Components](#components)
3. [SEO](#seo)

## Semantics

A semantic element clearly describes its meaning to both the browser and the developer.

Examples of non-semantic elements: `<div>` and `<span>` - Tells nothing about its content.

Examples of semantic elements: `<form>`, `<table>`, and `<article>` - Clearly defines its content.

HTML5 offers new [semantic elements](https://www.w3schools.com/html/html5_semantic_elements.asp) to define different parts of a web page:

```html
<article> - Defines an article
<aside> - Defines content aside from the page content
<details> - Defines additional details that the user can view or hide
<figcaption> - Defines a caption for a <figure> element
<figure> - Specifies self-contained content, like illustrations, diagrams, photos, code listings, etc.
<footer> - Defines a footer for a document or section
<header> - Specifies a header for a document or section
<main> - Specifies the main content of a document
<mark> - Defines marked/highlighted text
<nav> - Defines navigation links
<section> - Defines a section in a document
<summary> - Defines a visible heading for a <details> element
<time> - Defines a date/time
```

This is what it generally look like in action:

```html
<header>
    <nav></nav>
</header
<main>
    <section></section>
    <section></section>
    <section></section>
    <aside></aside>
</main>
<footer>
    <nav></nav>
</footer>
```

- - -

## Components

Using the `semantic` mentality and our love for object-orientation - we need to think about html in components.  Once you divide your html into components you are making a step to modularity that keeps things clean and readable.  Instead of just plopping a carousel onto a page, think of that carousel as a component that you can move around your codebase like:  

```html
<section class="carousel carousel__hero">
    <div class="carousel__hero--row">
        <div class="carousel__hero--slide">
            <img src="" class="carousel__hero--slideImage" />
        </div>
    </div>
</section>
```

- - -

## SEO

ZGM's core business is SEO.  We need to make sure the html we write complies with proper [guidelines](https://moz.com/beginners-guide-to-seo/basics-of-search-engine-friendly-design-and-development).

* Custom Fields For Extra Tracking Codes - for extra code that can be added just before </head> tag and just before </body> tag
* H1 tag - only 1 per page, and needs to contain text (no images)
* Meta Title - 70 characters or less
* Meta Description - 155 characters or less
* Image Alt Tags - should be pulled from Media Library
* Image Title Tags - can be the same as image alt tags
* Schema Markup - items like company name, address, logo, hours of operation, etc... need to have proper Schema markup
* Open Graph - all Pages and Posts need Open Graph markup so that sharing on social media pulls in proper data
* Speed - common items that need consideration:
  * Image Compression - images need to be compressed and sized properly
  * GZip should be enabled
  * Minification of CSS, JS, HTML - where possible
  * Minimize redirects
