# CSS

::: tip SCSS
At ZGM we utilize SCSS as our pre-processor of choice whenever possible.  It provides a more flexible and clean approach to writing css.
:::

::: tip Conventions
1. [BEM](#bem)
2. [Utility Classes](#utility-classses)
:::

## BEM


> The naming convention follows this pattern:

<pre style="color:white">
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
</pre>

> The reason for double rather than single hyphens and underscores is so that your block itself can be hyphen delimited, for example:
 
<pre style="color:white">
.site-search {} /* Block */
.site-search__field {} /* Element */
.site-search--full {} /* Modifier */
</pre>

> The point of BEM is to tell other developers more about what a piece of markup is doing from its name alone. By reading some HTML with some classes in, you can see how – if at all – the chunks are related; something might just be a component, something might be a child, or element, of that component, and something might be a variation or modifier of that component. To use an analogy/model, think how the following things and elements are related:

<pre style="color:white">
.person {}
.person__hand {}
.person--female {}
.person--female__hand {}
.person__hand--left {}
</pre>

> Taking the site search example:

    <form class="site-search  site-search--full">
        <input type="text" class="site-search__field">
        <input type="Submit" value ="Search" class="site-search__button">
    </form>


## Utility Classses


> Not everything needs to be in BEM format.  Utility classes can be used to sprinkle general css throughout your code.

<pre style="color:white">
.text-uppercase { 
    text-transform: uppercase; 
}
.color-blue { 
    color: blue;
}
.fw-bold{
    font-weight: bold;
}
</pre>