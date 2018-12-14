---
title: PHP
---
# PHP

## Table Of Contents

1. [General](#general)
    - [Documenting](#documenting)
    - [Composer Autoloading](#composer-autoloading)
    - [Functions](#functions)
    - [Classes](#classes)
    - [Namespacing](#namespacing)
2. [Conventions](#conventions)
    - [Alternative Syntax](#alternative-syntax)
    - [Sprintf](#sprintf)

## General

### Documenting
Make sure you are following a basic [phpdoc block](http://docs.phpdoc.org/guides/docblocks.html) spec for commenting your code.  You will thank your future self:

```php
/**
 * This is a summary.
 * This is a description
 */
```
```php
/*
|--------------------------------------------------------------------------
| Application Name
|--------------------------------------------------------------------------
|
| This value is the name of your application. This value is used when the
| framework needs to place the application's name in a notification or
| any other location as required by the application or its packages.
|
*/
```
### Composer Autoloading
Gone are the days of including every php file in your application.  [Composer autloading](https://getcomposer.org/doc/01-basic-usage.md) can be used to dynamically include classes and filed throughout your codebase with the use of the PSR-4 spec

### Functions
Procedural coding means using flat functions.  This type of coding style is best suited for smaller utility purposes.  This can also get messy pretty quicky which is why we encourage the use of [classes]($classes) whenever possible:
```php
<?php
function go_to_bed($time)
{
    if ($time > 11){
        return true;
    }
}
?>
```

### Classes
[Classes](http://php.net/manual/en/language.oop5.php) are used to keep your code organized in a modular fashion.  There are many reasons to use this approach, as well as many ways to structure your classes in code.  To keep it brief, here is an example from our [basic wordpress plugin boilerplate](https://github.com/zero-gravity-marketing/boilerplate-wordpress-plugin-basic):

```php
class ZGM_Basic_Plugin
    {
        /**
        * Intended to run first when the class is initiated
        */
        public function init() {
            /**
            * Plugin Activation Hook
            * @link https://developer.wordpress.org/reference/functions/register_activation_hook/
            */
            register_activation_hook( __FILE__, function(){
                // clear the permalinks
                flush_rewrite_rules();
                register_uninstall_hook( __FILE__, array($this,'register_uninstall_hook') );
            });
            /**
            * Plugin Deactivation Hook
            * @link https://developer.wordpress.org/reference/functions/register_deactivation_hook/
            */
            register_deactivation_hook( __FILE__, function(){
                // clear the permalinks
                flush_rewrite_rules();
            });
        }
        /**
        * Plugin Uninstall Hook
        * @link https://developer.wordpress.org/reference/functions/register_uninstall_hook/
        */
        public function register_uninstall_hook()
        {
            //
        }
        /**
        * Add WP Filters Hook
        * @link https://developer.wordpress.org/reference/functions/add_filter/
        */
        public function add_filters()
        {
            add_filter('body_class', array($this,'body_class'));
        }
        /**
        * Add WP Actions Hook
        * @link https://developer.wordpress.org/reference/functions/add_action/
        */
        public function add_actions()
        {
            add_action('wp_footer', array($this,'wp_footer') );
        }
        /**
         * EXAMPLE: Add <body> classes
         */
        public function body_class($classes)
        {
          // Add page slug if it doesn't exist
          if (is_single() || is_page()) {
            if (!in_array(basename(get_permalink()), $classes)) {
              $classes[] = basename(get_permalink());
            }
          }
          return $classes;
        }
        /**
         * EXAMPLE: Add Footer Scripts
         */
        public function wp_footer()
        {
            echo "<script>console.log('wp_footer');</script>";
        }
    }
}
/**
 * Initialize all Plugin Class Methods
 */
if ( class_exists( 'ZGM_Basic_Plugin' ) ) {
    $ZGM_Basic_Plugin = new ZGM_Basic_Plugin();
    $ZGM_Basic_Plugin->init();
    $ZGM_Basic_Plugin->add_filters();
    $ZGM_Basic_Plugin->add_actions();
}
```

Notice how methods within the classes have their curly brackets indented:

```php
/**
 * EXAMPLE: Add Footer Scripts
 */
public function wp_footer()
{
    echo "<script>console.log('wp_footer');</script>";
}
```

This is the preferred style taken from the codebase in [laravel](https://laravel.com)

### Namespacing
Namespacing is a way of `prefixing` your code. You can think of namespaces in the same way you think of sorting files on your computer into folders. You cannot save a file with the exact same name in the same folder. You can, however, save a file with the same name into a different folder.

We always encourage namespacing whenever possible. Here is a super simple example:

**Define Namespace**

```php
<?php

namespace ZGM\Vibrato\Classes;

class Theme{
    /**
     * Page titles
     */
    public static function title() 
    {
        echo $title;
    }
}
```

**Use Namespace**
```php
<?php

use ZGM\Vibrato\Classes\Theme;
?>

<h2><?= Theme::title(); ?></h2>
```

## Conventions

### Alternative Syntax

---

**Conditionals**

When mixing html within php avoid using curly brackets `{` and opt for using [control structures](http://php.net/manual/en/control-structures.alternative-syntax.php) like this:

```php
<?php if ($button_title): ?>
    <button><?= $button_title; ?></button>
<?php endif; ?>

<?php foreach ($buttons as $button): ?>
    <button><?= $button['title']; ?></button>
<?php endforeach; ?>
```

---

**Short Echo**

As of PHP 5.4.0, short echo syntax is permanently enabled, while previously [short_open_tag](http://php.net/manual/en/ini.core.php#ini.short-open-tag) had to be enabled within the PHP configuration.

Short echo syntax is simple. Normally we echo this way:

```php
<?php echo $variable; ?>
```

With the short echo syntax, this can be shortened:

```php
<?= $variable; ?>
```

---

**Short Array**
This is a feature that was introduced in [PHP 5.4.](http://php.net/manual/en/migration54.new-features.php) It’s a simple update - instead of using array(), you can use brackets. In the WordPress context, this can save you some space, so for instance, a WP_Query might look like this:

```php
$new_query = new WP_Query(array(
  'post_type'      => 'movies',
  'posts_per_page' => 5,
  'tax_query'      => array(
    array(
      'taxonomy' => 'genres',
      'field'    => 'slug',
      'terms'    => 'action'
    )
  )
));
```

The short array syntax makes looks like this:

```php
$new_query = new WP_Query([
  'post_type'      => 'movies',
  'posts_per_page' => 5,
  'tax_query'      => [
    [
      'taxonomy' => 'genres',
      'field'    => 'slug',
      'terms'    => 'action'
    ]
  ]
]);
```

---

**Anonymous Functions**

As of [PHP 5.3](http://php.net/manual/en/functions.anonymous.php), we have access to anonymous functions. An anonymous function is simply a function without a name. There are many instances when working with WordPress where we use a function exactly in one place. Passing these function names to hooks and filters. Normally that looks like this:

```php
function custom_excerpt_length() {
  return 20;
}
add_filter('excerpt_length', 'custom_excerpt_length');
```

Now you can do this:

```php
add_filter('excerpt_length', function() {
  return 20;
});
```

---

### Sprintf

Whenever writing alot of conditionals within html to produce things like class names use [sprintf](http://php.net/manual/en/function.sprintf.php) to keep things clean:

```php
<?php
$is_true = $is_true ? $is_true : null;
$could_be_true = $could_be_true ? $could_be_true : null;
?>
<section class="section <?= sprintf('%s %s', $is_true,$could_be_true); ?>" >
//
</section>
```

