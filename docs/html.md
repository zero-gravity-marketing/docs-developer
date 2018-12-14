---
title: HTML
---
# HTML

## Table Of Contents

1. [General](#general)
    - [Semantics](#semantics)
    - [Components](#components)
2. [SEO](#seo)

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

---

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

---

## SEO

ZGM's core business is SEO.  We need to make sure the html we write complies with proper [guidelines](https://moz.com/beginners-guide-to-seo/basics-of-search-engine-friendly-design-and-development).


