---
title: CSS
---
# CSS

::: tip SCSS
At ZGM we utilize [SCSS](#sass) as our pre-processor of choice whenever possible.  It provides a more flexible and clean approach to writing css.
:::

::: tip CSS Conventions
1. [General](#general)
2. [BEM](#bem)
2. [Utility Classes](#utility-classses)
:::

## Table Of Contents

1. [General](#general)
    - [Formatting](#formatting)
    - [Typography](#typography)
    - [Comments](#comments)
    - [ID Selectors](#id-selectors)
    - [JavaScript hooks](#javascript-hooks)
    - [Border](#border)
2. [Sass](#sass)
    - [Syntax](#syntax)
    - [Ordering](#ordering-of-property-declarations)
    - [Variables](#variables)
    - [Mixins](#mixins)
    - [Extend directive](#extend-directive)
    - [Nested selectors](#nested-selectors)
3. [BEM](#bem)
4. [Utility Classes](#utility-classses)

## General

### Formatting

* Use soft tabs (2 spaces) for indentation.
* Prefer dashes over camelCasing in class names.
  - Underscores and PascalCasing are okay if you are using BEM (see [OOCSS and BEM](#oocss-and-bem) below).
* Do not use ID selectors.
* When using multiple selectors in a rule declaration, give each selector its own line.
* Put a space before the opening brace `{` in rule declarations.
* In properties, put a space after, but not before, the `:` character.
* Put closing braces `}` of rule declarations on a new line.
* Put blank lines between rule declarations.

**Bad**

```css
.avatar{
    border-radius:50%;
    border:2px solid white; }
.no, .nope, .not_good {
    // ...
}
#lol-no {
  // ...
}
```

**Good**

```css
.avatar {
  border-radius: 50%;
  border: 2px solid white;
}

.one,
.selector,
.per-line {
  // ...
}
```
### Typography

Typographpy should be consistent across an entire site and codebase.  This means defining all your types initially in one file like so:

***_type.scss***

```css
p, .p1{
    font-size: 1rem;
    line-height: 1;
}

h1,.h1{
    font-size: 2rem;
    line-height: 1.5;
}
```

Also when it comes to defining typography units, we encourage `rem` over `px`.
***REM***
When specified on the font-size property of the root element, the rem units refer to the property's initial value. This means that 1rem equals the font size of the html element (which for most browsers has a default value of 16px).  This helps with scalability and consistency.

### Comments

* Prefer line comments (`//` in Sass-land) to block comments.
* Prefer comments on their own line. Avoid end-of-line comments.
* Write detailed comments for code that isn't self-documenting:
  - Uses of z-index
  - Compatibility or browser-specific hacks

### ID selectors

While it is possible to select elements by ID in CSS, it should generally be considered an anti-pattern. ID selectors introduce an unnecessarily high level of [specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) to your rule declarations, and they are not reusable.

For more on this subject, read [CSS Wizardry's article](http://csswizardry.com/2014/07/hacks-for-dealing-with-specificity/) on dealing with specificity.

### JavaScript hooks

Avoid binding to the same class in both your CSS and JavaScript. Conflating the two often leads to, at a minimum, time wasted during refactoring when a developer must cross-reference each class they are changing, and at its worst, developers being afraid to make changes for fear of breaking functionality.

We recommend creating JavaScript-specific classes to bind to, prefixed with `.js-`:

```html
<button class="btn btn-primary js-request-to-book">Request to Book</button>
```

### Border

Use `0` instead of `none` to specify that a style has no border.

**Bad**

```css
.foo {
  border: none;
}
```

**Good**

```css
.foo {
  border: 0;
}
```
**[⬆ back to top](#table-of-contents)**

## Sass

### Syntax

* Use the `.scss` syntax, never the original `.sass` syntax
* Order your regular CSS and `@include` declarations logically (see below)

### Ordering of property declarations

1. Property declarations

    List all standard property declarations, anything that isn't an `@include` or a nested selector.

    ```scss
    .btn-green {
      background: green;
      font-weight: bold;
      // ...
    }
    ```

2. `@include` declarations

    Grouping `@include`s at the end makes it easier to read the entire selector.

    ```scss
    .btn-green {
      background: green;
      font-weight: bold;
      @include transition(background 0.5s ease);
      // ...
    }
    ```

3. Nested selectors

    Nested selectors, _if necessary_, go last, and nothing goes after them. Add whitespace between your rule declarations and nested selectors, as well as between adjacent nested selectors. Apply the same guidelines as above to your nested selectors.

    ```scss
    .btn {
      background: green;
      font-weight: bold;
      @include transition(background 0.5s ease);

      .icon {
        margin-right: 10px;
      }
    }
    ```

### Variables

Prefer dash-cased variable names (e.g. `$my-variable`) over camelCased or snake_cased variable names. It is acceptable to prefix variable names that are intended to be used only within the same file with an underscore (e.g. `$_my-variable`).

### Mixins

Mixins should be used to DRY up your code, add clarity, or abstract complexity--in much the same way as well-named functions. Mixins that accept no arguments can be useful for this, but note that if you are not compressing your payload (e.g. gzip), this may contribute to unnecessary code duplication in the resulting styles.

### Extend directive

`@extend` should be used with caution because it has unintuitive and potentially dangerous behavior, especially when used with nested selectors. Even extending top-level placeholder selectors can cause problems if the order of selectors ends up changing later (e.g. if they are in other files and the order the files are loaded shifts). Use cases for this are when you are extending utlity classes that you have created yourself within the codebase.

### Nested selectors

**Do not nest selectors more than three levels deep!**

```scss
.page-container {
  .content {
    .profile {
      // STOP!
    }
  }
}
```

When selectors become this long, you're likely writing CSS that is:

* Strongly coupled to the HTML (fragile) *—OR—*
* Overly specific (powerful) *—OR—*
* Not reusable


Again: **never nest ID selectors!**

If you must use an ID selector in the first place (and you should really try not to), they should never be nested. If you find yourself doing this, you need to revisit your markup, or figure out why such strong specificity is needed. If you are writing well formed HTML and CSS, you should **never** need to do this.

## BEM

**BEM**, or “Block__Element--Modifier”, is a _naming convention_ for classes in HTML and CSS. It helps with consistency, readability, and cleanliness.

We encourage a modular mentality with the use of BEM & [Utility Classes](#utility-classses) for these reasons:

  * It helps create clear, strict relationships between CSS and HTML
  * It helps us create reusable, modular components
  * It allows for less nesting and lower specificity
  * It helps in building scalable stylesheets

The naming convention follows this pattern:

```scss
.block {}
.block__element {}
.block--modifier {}
.block__element--modifier {}
.block{
    &__element{
        &--modifer{
        }
    }   
}
```

The reason for double rather than single hyphens and underscores is so that your block itself can be hyphen delimited, although camelcase is encouraged - for example:
 
```scss
.site-search {} /* Block */
.siteSearch {} /* Block */

.site-search__field {} /* Element */
.siteSearch__field {} /* Element */

.site-search--full {} /* Modifier */
.siteSearch--full {} /* Modifier */

.siteSearch__field--full {} /* BEM */
.siteSearch__fieldLeft--fullBlue {} /* BEM */
```

The point of BEM is to tell other developers more about what a piece of markup is doing from its name alone. By reading some HTML with some classes in, you can see how – if at all – the chunks are related; something might just be a component, something might be a child, or element, of that component, and something might be a variation or modifier of that component. To use an analogy/model, think how the following things and elements are related:

```scss
.person {}
.person__hand {}
.person--female {}
.person--female__hand {}
.person__hand--left {}
```

Taking the site search example:

```html
    <form class="site-search  site-search--full">
        <input type="text" class="site-search__field">
        <input type="Submit" value ="Search" class="site-search__button">
    </form>
```


## Utility Classses


Not everything needs to be in BEM format.  Utility classes can be used to sprinkle general css throughout your code.

```scss
.text-uppercase { 
    text-transform: uppercase; 
}
.color-blue { 
    color: blue;
}
.fw-bold{
    font-weight: bold;
}
```