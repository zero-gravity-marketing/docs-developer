---
title: Wordpress
---
# Wordpress

## Table Of Contents

1. [Themes](#themes)
   * [Beaver Builder Theme](#beaver-builder-theme)
   * [Custom: Vibrato](#vibrato)
2. [Plugins](#plugins)
   * [SEO](#seo-plugins)
   * [Page Builders](#page-builder-plugins)  
   * [Optimization](#optimization-plugins)  
   * [Migration](#migration-plugins)
   * [Forms](#form-plugins)
   * [Backup & Staging](#backup-and-staging-plugins)
   * [Custom](#custom-plugins)
3. [Custom Fields](#custom-fields)
4. [Best Practices](#best-practices)

## Themes

::: warning How to Select (Generally)

* 5k - 15k : [Beaver Builder Theme](#beaver-builder-theme)  
* 15k+ : [Vibrato](#vibrato)
  :::

#### Beaver Builder Theme

Our premium theme of choice.  The beaver builder ecosystem works well for smaller builds when you don't need to hand-code everything.

* [Parent Theme](https://www.dropbox.com/sh/lpc8q3zi0eor0tl/AADk4BxlghJRb54yo3V9EDsna?dl=0)  
* [Child Theme](https://www.dropbox.com/sh/4mkn6er5zk28cj8/AADPIN7h4Tv7zX7d306Ha6qqa?dl=0)

#### Vibrato

Our custom wordpress theme boilerplate. Initially inspired by Roots - Sage 8 to include OOP, Laravel Mix, Vue.js, & Carbon Fields.

* <https://github.com/zero-gravity-marketing/vibrato>

## Plugins

::: warning Common Types

* [SEO](#seo-plugins)
* [Page Builders](#page-builder-plugins)  
* [Optimization](#optimization-plugins)  
* [Migration](#migration-plugins)
* [Forms](#form-plugins)
* [Backup & Staging](#backup-and-staging-plugins)
  :::

#### SEO Plugins

* [Yoast](https://wordpress.org/plugins/wordpress-seo/)
* [The SEO Framework](https://wordpress.org/plugins/autodescription/)
* [Header Footer Code Manager](https://wordpress.org/plugins/header-footer-code-manager/)

#### Page Builder Plugins

* [Beaver Builder Pro](https://www.dropbox.com/sh/zpje585nmr49apa/AACAR1lOUnGLHTa1tKXhrHqka?dl=0)
* [Beaver Themer](https://www.dropbox.com/sh/pfqbqhrrttqo8r9/AADhqt20dzFj0ON1THSfd2x4a?dl=0)
* [Beaver Builder 3rd Party Extensions](https://www.dropbox.com/sh/tz7f42dkx1zlguh/AACYMP09yM-22Nmqd5ve4S1ha?dl=0)

#### Optimization Plugins

* [Autoptimize](https://wordpress.org/plugins/autoptimize/)
* [Cloudways - Breeze](https://wordpress.org/plugins/breeze/)
* [WP Sweep](https://wordpress.org/plugins/wp-sweep/)
* [Query Monitor](https://wordpress.org/plugins/query-monitor/)
* WP Smush Pro

#### Migration Plugins

* [Cloudways Wordpress Migrator](https://wordpress.org/plugins/bv-cloudways-automated-migration/)
* [WP Migrate DB Pro](https://www.dropbox.com/sh/4ld51dfpnez1wo5/AAC9XzJlPdB_t2cVXzpPFgLla?dl=0)

#### Form Plugins

* [Gravity Forms](https://www.dropbox.com/s/ujtryea24aifqhf/gravityforms_2.2.3.14.zip?dl=0)

#### Backup and Staging Plugins

* [WP Timecapsule](https://wordpress.org/plugins/wp-time-capsule/)

#### Custom Plugins

We have created boilerplates for writing custom plugins.

**Basic Plugin:** For quick functionality that doesn't belong in a theme: 

* [Boilerplate Wordpress Plugin Basic](https://github.com/zero-gravity-marketing/boilerplate-wordpress-plugin-basic)

**Gutenberg Plugin:** For quick custom Gutenberg block that doesn't belong in a theme: 

* [Boilerplate Wordpress Plugin Gutenberg](https://github.com/zero-gravity-marketing/boilerplate-wordpress-plugin-gutenberg)

**Full Plugin:** For full functionality that needs a modular approach: 

* Coming soon...

## Custom Fields

Our custom fields of choice.  Way more efficient and performant than ACF.
Carbon Fields is not a plugin but a library loaded from composer:

* [Carbon Fields](https://carbonfields.net/)

## Best Practices

Wordpress is a beast.  There is a million ways to do everything which makes it hard to keep developing within the wordpress ecosystem consistent.  To alleviate those issues please follow these general guidelines:

1. **Never edit a parent theme:** (unless its a custom theme we created) always use a child theme when dealing with pre-made themes so that it does not get overwritten when a theme author updates their code
2. **Never edit a plugin:** always pull the necessary code/filter to be edited into your own plugin or child theme so that it does not get overwritten when the plugin author updates their code.
3. **Use WP Filters & Actions:** Whenever possible opt for using a wordpress filter or action instead of overriding a template file.
4. **Be Careful with Plugins:** Make sure the plugins you are using have a track record of being successful and maintained.
5. **Be aware of the database:** Evertime you press `save` or `publish` in wordpress a record is stored in the database.  Similarly, alot of plugins come with their own `baggage` of database tables.  We need to be aware of what plugins and themes are doing to the database for security and performance reasons.  If you are `cleaning` up a site and removing unnecessary plugins, first look in their settings to see if they will delete what they came with after uninstalling.  One of the most important concepts to understand in the wp database is within the `wp_options` table and how to [optimize the autoloaded data](https://kinsta.com/knowledgebase/wp-options-autoloaded-data/)
6. **Does it need to be within wordpress?** Not every functionality needs to be built within the site. If you are slapping together 5 plugins to get a desired affect, than its worth looking into external options that you can simply include in your site.
